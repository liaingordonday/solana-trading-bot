require('dotenv').config();

if (process.env.WALLET_SECRET) {
    console.log('✅ WALLET_SECRET loaded successfully from .env');
} else {
    console.log('❌ WALLET_SECRET not found. Check .env file and variable name.');
}
