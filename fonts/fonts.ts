import localFont from 'next/font/local'

export const aestheticFont = localFont({
  src: [
    {
      path: '../fonts/Aesthetic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    // If you have additional weights or styles, add them here
    // {
    //   path: '../fonts/Aesthetic-Bold.ttf',
    //   weight: '700',
    //   style: 'normal',
    // }
  ],
  variable: '--font-aesthetic', // This creates a CSS variable for easy use
})