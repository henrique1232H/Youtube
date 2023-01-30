import { Card } from "../../components/cards/Card";
import { Header } from "../../components/header/Header";
import { Menu } from "../../components/menu";

import "./style.css"

export function Home() {

    return (
        <div className="container">

            <div className="grid">

            

            <div className="header">
                <Header />
            </div>
            
            <div className="menu">
                <Menu />
            </div>

            <div className="card">
                <Card />
            </div>

            </div>
            
        </div>
    )
}