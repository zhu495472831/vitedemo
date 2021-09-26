import { visualizer } from 'rollup-plugin-visualizer'
import { isReportMode } from '../../utils'
export function visualizerPlugin() {
  if (isReportMode()) {
    return visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  }
  return []
}
