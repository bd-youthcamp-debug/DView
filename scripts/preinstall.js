
if (!/pnpm/.test(process.env.npm_execpath || '')) {
    console.warn('\u001b[31m请使用 pnpm 包管理器!\u001b[0m\n')
    process.exit(1)
}
