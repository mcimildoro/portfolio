"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const google_1 = require("next/font/google");
require("./globals.css");
const next_themes_1 = require("next-themes");
const urbanist = (0, google_1.Urbanist)({ subsets: ["latin"] });
exports.metadata = {
    title: "Miguel-Cimildoro",
    description: "Landing Page by Miguel Cimildoro",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={`${urbanist.className} antialiased`}>
          <next_themes_1.ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          </next_themes_1.ThemeProvider>
      </body>
    </html>);
}
