// تكوين ثابت للنظام
export const CONFIG = {
  ADMIN_ADDRESS: '0xf0e48a815075849d9c689c096f163a91deae0f29',
  NETWORK_URL: 'http://127.0.0.1:7545',
  CHAIN_ID: '1337',
  IDENTITY_CONTRACT_ADDRESS: '0xaaC5DcdAeadEe8aA2eE7C7c6F381AB44948963B5',
  CERTIFICATES_CONTRACT_ADDRESS: '0x2AA6Bc8e926Ee5ECaA24c3B29cf24A3e32380682',
  EXAMINATIONS_CONTRACT_ADDRESS: '0x7A053c7c399511d6bCb66224F2b2b6044a62CBa6',
  SECURITY_UTILS_CONTRACT_ADDRESS: '0x0C68202ED4bB6332C7dC4c7aAe125cB240F3c369',
  EXAM_MANAGEMENT_CONTRACT_ADDRESS: '0x379B947EEa4EF36276B69133D28B036e46732AaB'
};

// وظيفة للحصول على قيمة التكوين
export const getConfig = (key: keyof typeof CONFIG): string => {
  // محاولة الحصول على القيمة من متغيرات البيئة أولاً
  const envValue = process.env[`NEXT_PUBLIC_${key}`] || process.env[key];
  
  // إذا لم يتم العثور على القيمة في متغيرات البيئة، استخدم القيمة الثابتة
  return envValue || CONFIG[key];
};

// وظيفة للتحقق من صحة التكوين
export const validateConfig = () => {
  const missingKeys: string[] = [];
  
  Object.keys(CONFIG).forEach((key) => {
    const value = getConfig(key as keyof typeof CONFIG);
    if (!value) {
      missingKeys.push(key);
    }
  });

  if (missingKeys.length > 0) {
    throw new Error(`Missing configuration values for: ${missingKeys.join(', ')}`);
  }

  return true;
}; 