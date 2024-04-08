import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './openapi.json',
  apiFile: './src/services/template.ts',
  apiImport: 'template',
  outputFile: './src/services/generated.ts',
  exportName: 'generated',
  hooks: true,
}

export default config
