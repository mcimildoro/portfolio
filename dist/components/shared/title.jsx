"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Title = (props) => {
    const { title, subtitle } = props;
    return (<div className="flex flex-col items-center">
            <h3 className="text-gray-400">{title}</h3>
            <h2 className="text-3xl">{subtitle}</h2>
        </div>);
};
exports.default = Title;
