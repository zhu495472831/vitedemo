import viteSvgIcons from 'vite-plugin-svg-icons'
import path from 'path'

export function viteSvgIconsPlugin(isBuild: boolean) {
  return viteSvgIcons({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild,
  })
}
