// config.js
window.CONFIG = {
    // Base configuration
    SAFE_CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~!$\'()*,/:@;+[]{}|^<>`#',
    MAX_URL_LENGTH: 8892,
    CHUNK_SIZE: 8,
    //group of 4 values (representing one original byte)
    BYTE_SIZE: 4,

    
    // Image processing configurations
    SUPPORTED_INPUT_FORMATS: [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/gif',
        'image/bmp',
        'image/svg+xml',
        'image/heic',
        'image/heif',
        'image/avif'
    ],
    
    // More granular compression strategies
    COMPRESSION_STRATEGIES: [
        // High quality attempts
        { format: 'image/webp', quality: 0.95 },
        { format: 'image/webp', quality: 0.90 },
        { format: 'image/webp', quality: 0.85 },
        
        // Medium quality attempts
        { format: 'image/webp', quality: 0.80 },
        { format: 'image/webp', quality: 0.75 },
        { format: 'image/webp', quality: 0.70 },
        
        // Lower quality attempts
        { format: 'image/webp', quality: 0.65 },
        { format: 'image/webp', quality: 0.60 },
        { format: 'image/webp', quality: 0.55 },
        { format: 'image/webp', quality: 0.50 },
        
        // lowest quality attempts
        { format: 'image/webp', quality: 0.45 },
        { format: 'image/webp', quality: 0.40 },
        { format: 'image/webp', quality: 0.35 },
        { format: 'image/webp', quality: 0.30 },

        // last resort attempts
        { format: 'image/webp', quality: 0.25 },
        { format: 'image/webp', quality: 0.20 },
        { format: 'image/webp', quality: 0.15 },
        { format: 'image/webp', quality: 0.10 },
    ],

    // Format signatures remain the same
    FORMAT_SIGNATURES: {
        JPEG: { bytes: [0xFF, 0xD8], format: 'image/jpeg' },
        PNG: { bytes: [0x89, 0x50, 0x4E, 0x47], format: 'image/png' },
        GIF87a: { bytes: [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], format: 'image/gif' },
        GIF89a: { bytes: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], format: 'image/gif' },
        BMP: { bytes: [0x42, 0x4D], format: 'image/bmp' },
        WEBP: { bytes: [0x57, 0x45, 0x42, 0x50], offset: 8, format: 'image/webp' },
        HEIC: { bytes: [0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x63], offset: 4, format: 'image/heic' },
        HEIF: { bytes: [0x66, 0x74, 0x79, 0x70, 0x68, 0x65, 0x69, 0x66], offset: 4, format: 'image/heif' },
        AVIF: { bytes: [0x66, 0x74, 0x79, 0x70, 0x61, 0x76, 0x69, 0x66], offset: 4, format: 'image/avif' },
        SVG: { bytes: [0x3C, 0x3F, 0x78, 0x6D, 0x6C], format: 'image/svg+xml' }
    }
};
