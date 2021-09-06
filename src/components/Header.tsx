interface Props {
    isSettingsVisible: any,
    setIsSettingsVisible: any
}

const Header = (props: Props) => {
    return (
        <header className="mt-3 text-center">
            <h1 className="text-center">Dürümulator</h1>
            <p className="h6">Dünyanın en <button className="settings-button" onClick={() => props.setIsSettingsVisible(!props.isSettingsVisible)}>gelişmiş</button> dürüm miktarı hesaplama aracı</p>
        </header>
    )
}

export default Header