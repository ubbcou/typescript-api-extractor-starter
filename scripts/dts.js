const { Extractor, ExtractorConfig } = require('@microsoft/api-extractor')
const path = require('path')

// generate index.d.ts
async function generateDTS() {
  const extractorConfigPath = path.resolve(__dirname, '../api-extractor.json')
  const extractorConfig = ExtractorConfig.loadFileAndPrepare(extractorConfigPath)
  const extractorResult = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true,
  })
  if (extractorResult.succeeded) {
    console.log(
      'good'
    )
  } else {
    console.error(
      `API Extractor completed with ${extractorResult.errorCount} errors`
        + ` and ${extractorResult.warningCount} warnings`,
    )
    process.exitCode = 1
  }

  await fs.remove(path.resolve(__dirname, 'dist/src'))
}

generateDTS()

module.exports = {
  generateDTS,
}
