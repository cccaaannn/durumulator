import { durumLinks, durumEmoji } from '../config/options'

const DurumButton = () => {

    const getRandomDurumLink = (durumLinks: string[]): void => {
        const rnd = Math.floor(Math.random() * durumLinks.length);
        window.open(durumLinks[rnd], "_blank");
    }

    return (
        <button className="durum-button" onClick={() => getRandomDurumLink(durumLinks)}>
            {durumEmoji}
        </button>
    )
}

export default DurumButton;
