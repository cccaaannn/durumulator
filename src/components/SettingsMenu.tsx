// react
import { useEffect } from 'react';

// bootstrap
import { Card } from 'react-bootstrap';

// hooks
import usePositiveNumberForm from '../hooks/usePositiveNumberForm';

// options
import { currency, defaultDurumCost, durumEmoji } from '../config/options';


interface Props {
    durumCost: any,
    setDurumCost: any
}

const SettingsMenu = (props: Props) => {

    const [positiveNumberForm, setPositiveNumberForm] = usePositiveNumberForm(props.durumCost);

    useEffect(() => {
        props.setDurumCost(positiveNumberForm)
    }, [positiveNumberForm])

    return (
        <Card className="mb-3 p-3 col-md-9 col-auto mx-auto">
            <div className="mb-3">
                Çok gizli ayar menüsü
            </div>
            <div className="input-group">
                <span className="input-group-text">Birim {durumEmoji} fiyatı {currency.symbol}</span>
                <input type="number" className="form-control" aria-label="Dürüm-fiyatı" placeholder={"varsayılan: " + defaultDurumCost} onChange={(e: any) => setPositiveNumberForm(e.target.value)} defaultValue={positiveNumberForm.toString()} />
            </div>
        </Card>
    )
}

export default SettingsMenu;
