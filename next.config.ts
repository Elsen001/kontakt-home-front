/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    'pino',
    'pino-pretty',
    'thread-stream',
    // əgər web3 ilə işləyirsənsə → "@walletconnect/..." və s.
  ],
};

module.exports = nextConfig;