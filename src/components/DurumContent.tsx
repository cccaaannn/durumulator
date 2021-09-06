// bootstrap
import { Card, Row, Col } from 'react-bootstrap';

// hooks
import usePositiveNumberForm from '../hooks/usePositiveNumberForm';
import useDurumCounter from '../hooks/useDurumCounter';

// utils
import { currencyFormatter, numberFormatter } from '../utils/formatters';

// components
import DurumButton from '../components/DurumButton';

// options
import { currency, maxDurumDrawingNumber, maxDurumErrorMessage, enjoyMealMessage } from '../config/options';


interface Props {
    durumCost: any
}

const DurumContent = (props: Props) => {

    // durum money form input
    const [durumMoney, setDurumMoney] = usePositiveNumberForm();

    const [durumCount] = useDurumCounter(durumMoney, props.durumCost)

    return (
        <Card className="mt-5 mb-3 p-3 col-md-9 col-auto mx-auto">

            {/* durum price form */}
            <Row>
                <div className="input-group">
                    <span className="input-group-text">Fiyat {currency.symbol}</span>
                    <input type="number" className="form-control" aria-label="Miktar" placeholder="ör: 30" onChange={(e: any) => setDurumMoney(e.target.value)} value={durumMoney.toString()} />
                </div>
            </Row>

            {/* display durum count */}
            <Row className="mt-3">
                <Col>
                    {`${currencyFormatter(durumMoney)} ${currency.shortName} ile ${numberFormatter(durumCount)} dürüm yiyebilirsin`}
                </Col>
            </Row>

            {/* display durum buttons */}
            <Row className="mt-3">
                <Col>
                    {
                        durumCount < maxDurumDrawingNumber
                            ?
                            <>
                                {[...Array(Math.floor(durumCount))].map((e, i) => <DurumButton key={i} />)}
                                {
                                    durumCount >= 1 &&
                                    <div className="mt-3">
                                        {enjoyMealMessage}
                                    </div>
                                }
                            </>
                            :
                            <>
                                {[...Array(maxDurumDrawingNumber)].map((e, i) => <DurumButton key={i} />)}
                                <div className="mt-3">
                                    {maxDurumErrorMessage}
                                </div>
                            </>
                    }
                </Col>
            </Row>

        </Card>
    )
}

export default DurumContent