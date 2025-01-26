"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container = (props) => {
    const { children } = props;
    return (<div className="px-12 py-20 md:px-40 md:px-36 max-w-3xl mx-auto">
            {children}
        </div>);
};
exports.default = Container;
