import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
    // 1) Next.js 기본 규칙 (공식 권장: core-web-vitals)
    ...nextVitals,

    // 2) eslint-config-next 기본 ignore를 필요에 맞게 오버라이드
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "dist/**",
        "coverage/**",
        "next-env.d.ts",
        "packages/**",
    ]),
]);

export default eslintConfig;
