import { useRouteError } from "react-router-dom";
import BotaoHome from "./BotaoHome";
export default function ExcecaoMsg() {
    const msg = useRouteError();
    console.error(msg);

    return (
        <>
            <hgroup>
                <h1>Oh :0</h1>
                <h2>Parece que essa página não está pronta ainda...</h2>
                <h3>Talvez mais tarde ela apreça por aqui ;D</h3>
            </hgroup>
            <BotaoHome />

        </>
    );
}