import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next'; //built in metadata object from react

export const metadata: Metadata = {
  //putting metadata on root layout file applies it to all pages inheriting layout file
  title: {
    //template automatically updates title should we make changes to metadata
    template: '%s | Acme Dashboard', //%s is replaced by page title
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard. built with app router.',
  metadataBase: new URL('https://nextjs-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
