export default async function handler(req, res) {
    const ua = (req.headers['user-agent'] || '').toLowerCase();                                                                   
    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
                                                                                                                                                                                           
    const botUAs = [                                                                                                                                                                       
      'facebookexternalhit', 'facebot', 'facebookbot',                                                                                                                                     
      'adsbot', 'googlebot', 'bingbot', 'twitterbot',                                                                                                                                      
      'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',                                                                                                                              
      'crawler', 'spider', 'headless', 'phantom', 'python',                                                                                                                                
      'curl', 'wget', 'java/', 'apache-httpclient'
    ];                                                                                                                                                                                     
                                                                                                                                                                                         
    const metaIPs = [                                                                                                                                                                      
      '66.220.', '69.63.', '69.171.', '173.252.',                                                                                                                                        
      '31.13.', '157.240.', '179.60.', '204.15.'
    ];                                                                                                                                                                                     
  
    const isBot = botUAs.some(b => ua.includes(b));                                                                                                                                        
    const isMeta = metaIPs.some(r => ip.startsWith(r));                                                                                                                                  
                                                                                                                                                                                           
    if (isBot || isMeta) {
      res.writeHead(302, { Location: 'https://grupojogadorcaro.com.br/quem-e-jota' });                                                                                                     
      res.end();                                                                                                                                                                         
      return;                                                                                                                                                                              
    }
                                                                                                                                                                                           
    const links = [                                                                                                                                                                      
      'https://chat.whatsapp.com/KeJ1meRXOCDJduORhbFkc0',       // 202
      'https://chat.whatsapp.com/GrjJ74h1p8Q1hp5dddudW4',       // 205                                                                                                                     
      'https://chat.whatsapp.com/Bbo5D3rsRsuKAIDTRoUzv3?mode=wwt', // 206
      'https://chat.whatsapp.com/C6DW6qAHOVtKLdnikwzXOd?mode=wwt', // 207                                                                                                                  
      'https://chat.whatsapp.com/JrBMdPMT3lU6Jxjqjo0xwN',       // 208                                                                                                                     
    ];                                                                                                                                                                                     
                                                                                                                                                                                           
    const link = links[Math.floor(Math.random() * links.length)];                                                                                                                          
                                                                                                                                                                                         
    res.writeHead(302, { Location: link });
    res.end();
  }
