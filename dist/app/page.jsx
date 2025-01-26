"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const navbar_1 = __importDefault(require("@/components/navbar"));
const introduction_1 = __importDefault(require("@/components/introduction"));
const about_me_1 = __importDefault(require("@/components/about-me"));
const experience_1 = __importDefault(require("@/components/experience"));
const services_1 = __importDefault(require("@/components/services"));
//import Portfolio from "@/components/portfolio";
const testimonials_1 = __importDefault(require("@/components/testimonials"));
const contact_1 = __importDefault(require("@/components/contact"));
const footer_1 = __importDefault(require("@/components/footer"));
function Home() {
    return (<main className="pb-40">
      <navbar_1.default />
      <introduction_1.default />
      <about_me_1.default />
      <experience_1.default />
      <services_1.default />
      {/*<Portfolio />*/}
      <testimonials_1.default />
      <contact_1.default />
      <footer_1.default />
    </main>);
}
