"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("@/data");
const link_1 = __importDefault(require("next/link"));
const toggle_theme_1 = __importDefault(require("./toggle-theme"));
const Navbar = () => {
    return (<nav className="fixed z-20 flex flex-col items-center  w-full mt-auto justify-center h-max bottom-20">
            <div className="flex item-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10  background-blur-sm rounded-full">
                {data_1.itemsNavbar.map((item) => (<div key={item.id} className="cursor-pointer hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 rounded-full transition duration-150">
                        <link_1.default href={item.link}>{item.icon} </link_1.default>
                    </div>))}
                <toggle_theme_1.default />
            </div>
        </nav>);
};
exports.default = Navbar;
