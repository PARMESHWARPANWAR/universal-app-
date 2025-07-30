import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/store/providers/StoreProvider';
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Professional Unit Converter',
  description: 'Professional unit converter for all your conversion needs',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl relative">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}