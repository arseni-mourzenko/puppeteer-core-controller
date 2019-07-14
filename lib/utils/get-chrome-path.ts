import * as os from 'os';

const currentPlatformType = os.type();

export function getChromePath(): string {
  switch (currentPlatformType) {
    case 'Darwin':
      return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

    case 'Windows_NT':
      return 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

    case 'Linux':
      return '/usr/share/applications/google-chrome-stable';

    default:
      throw new Error('You should supply the path to the Chrome App in the launch options');
  }
}
