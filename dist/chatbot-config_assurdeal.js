export const chatbotConfig = {
  chatflowid: 'b083aeff-ce2f-461a-96ec-fb848e32d94e',
  apiHost: 'https://flowiseserver-cnhrfkhcbfenaqaa.francecentral-01.azurewebsites.net',
  chatflowConfig: {
    // topK: 2
  },
  theme: {
    button: {
      backgroundColor: '#3B81F6',
      right: 20,
      bottom: 20,
      size: 55,
      dragAndDrop: true,
      iconColor: 'white',
      customIconSrc: 'https://cdn.jsdelivr.net/gh/softdev24715/flowise-cutomization/src/icon/button.gif',
      autoWindowOpen: {
        autoOpen: false,
        openDelay: 2,
        autoOpenOnMobile: false,
      },
    },
    tooltip: {
      showTooltip: true,
      tooltipMessage: 'Comment puis-je vous aider?',
      tooltipBackgroundColor: 'purple',
      tooltipTextColor: 'white',
      tooltipFontSize: 14,
    },
    chatWindow: {
      showTitle: true,
      showAgentMessages: false,
      title: 'Coewbot',
      titleAvatarSrc: 'https://cdn.jsdelivr.net/gh/softdev24715/flowise-cutomization/src/icon/chatheader.png',
      welcomeMessage: `<div>
    Bonjour, je suis Coewbot &#129302;, le robot conversationnel sp&eacute;cialiste des transactions de portefeuilles d&rsquo;assurance.<br>
    Je suis en phase d'apprentissage. Si je ne trouve pas la r&eacute;ponse &agrave; votre question, je vous invite &agrave; contacter nos services.<br>
    J'ai h&acirc;te d'&eacute;changer avec vous &#128513;
</div>`,
      errorMessage:
        "Il semble qu'il y ait un probl&egrave;me de connexion avec le serveur. Veuillez nous excuser pour&nbsp;ce&nbsp;d&eacute;sagr&eacute;ment.",
      backgroundColor: '#F8F8F8',
      backgroundImage: 'enter image path or link',
      fontSize: 14,
      starterPromptFontSize: 14,
      clearChatOnReload: true,
      botMessage: {
        backgroundColor: '#ffffff',
        textColor: '#303235',
        showAvatar: true,
        avatarSrc: 'https://cdn.jsdelivr.net/gh/softdev24715/flowise-cutomization/src/icon/msgicon.png',
      },
      userMessage: {
        backgroundColor: '#3B81F6',
        textColor: '#ffffff',
        showAvatar: false,
        avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
      },
      textInput: {
        placeholder: 'Posez-nous vos questions',
        backgroundColor: '#ffffff',
        textColor: '#303235',
        sendButtonColor: '#3C4DAB',
        maxChars: 500,
        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 500 characters.',
        autoFocus: false,
        sendMessageSound: false,
        receiveMessageSound: false,
      },
      feedback: {
        color: '#303235',
      },
      footer: {
        textColor: '#303235',
        text: 'Powered by',
        company: 'NDI',
        companyLink: 'https://new-digital-intelligence.com',
      },
    },
  },
};
