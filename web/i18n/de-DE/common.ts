const translation = {
  api: {
    success: 'Erfolg',
    actionSuccess: 'Aktion erfolgreich',
    saved: 'Gespeichert',
    create: 'Erstellt',
    remove: 'Entfernt',
  },
  operation: {
    create: 'Erstellen',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    clear: 'Leeren',
    save: 'Speichern',
    edit: 'Bearbeiten',
    add: 'Hinzufügen',
    added: 'Hinzugefügt',
    refresh: 'Neustart',
    reset: 'Zurücksetzen',
    search: 'Suchen',
    change: 'Ändern',
    remove: 'Entfernen',
    send: 'Senden',
    copy: 'Kopieren',
    lineBreak: 'Zeilenumbruch',
    sure: 'Ich bin sicher',
    download: 'Herunterladen',
    delete: 'Löschen',
    settings: 'Einstellungen',
    setup: 'Einrichten',
    getForFree: 'Kostenlos erhalten',
    reload: 'Neu laden',
    ok: 'OK',
    log: 'Protokoll',
    learnMore: 'Mehr erfahren',
    params: 'Parameter',
    duplicate: 'Duplikat',
    rename: 'Umbenennen',
  },
  placeholder: {
    input: 'Bitte eingeben',
    select: 'Bitte auswählen',
  },
  voice: {
    language: {
      zhHans: 'Chinesisch',
      zhHant: 'Chinesisch (traditionell)',
      enUS: 'Englisch',
      deDE: 'Deutsch',
      frFR: 'Französisch',
      esES: 'Spanisch',
      itIT: 'Italienisch',
      thTH: 'Thailändisch',
      idID: 'Indonesisch',
      jaJP: 'Japanisch',
      koKR: 'Koreanisch',
      ptBR: 'Portugiesisch',
      ruRU: 'Russisch',
      ukUA: 'Ukrainisch',
      viVN: 'Vietnamesisch',
      plPL: 'Polnisch',
    },
  },
  unit: {
    char: 'Zeichen',
  },
  actionMsg: {
    noModification: 'Im Moment keine Änderungen.',
    modifiedSuccessfully: 'Erfolgreich geändert',
    modifiedUnsuccessfully: 'Änderung nicht erfolgreich',
    copySuccessfully: 'Erfolgreich kopiert',
    paySucceeded: 'Zahlung erfolgreich',
    payCancelled: 'Zahlung abgebrochen',
    generatedSuccessfully: 'Erfolgreich generiert',
    generatedUnsuccessfully: 'Generierung nicht erfolgreich',
  },
  model: {
    params: {
      temperature: 'Temperatur',
      temperatureTip:
        'Kontrolliert Zufälligkeit: Eine niedrigere Temperatur führt zu weniger zufälligen Ergebnissen. Nähert sich die Temperatur null, wird das Modell deterministisch und repetitiv.',
      top_p: 'Top P',
      top_pTip:
        'Kontrolliert Diversität über Nukleus-Sampling: 0,5 bedeutet, dass die Hälfte aller wahrscheinlichkeitsgewichteten Optionen berücksichtigt wird.',
      presence_penalty: 'Präsenz-Strafe',
      presence_penaltyTip:
        'Wie stark neue Tokens basierend darauf bestraft werden, ob sie bereits im Text erschienen sind.\nErhöht die Wahrscheinlichkeit des Modells, über neue Themen zu sprechen.',
      frequency_penalty: 'Häufigkeitsstrafe',
      frequency_penaltyTip:
        'Wie stark neue Tokens basierend auf ihrer bisherigen Häufigkeit im Text bestraft werden.\nVerringert die Wahrscheinlichkeit des Modells, denselben Satz wortwörtlich zu wiederholen.',
      max_tokens: 'Maximale Token',
      max_tokensTip:
        'Begrenzt die maximale Länge der Antwort in Token. \nGrößere Werte können den Platz für Eingabeaufforderungen, Chat-Logs und Wissen begrenzen. \nEs wird empfohlen, dies unter zwei Dritteln zu setzen\ngpt-4-1106-Vorschau, gpt-4-vision-Vorschau maximale Token (Eingabe 128k Ausgabe 4k)',
      maxTokenSettingTip: 'Ihre Einstellung für maximale Token ist hoch, was den Platz für Eingabeaufforderungen, Abfragen und Daten potenziell begrenzen kann. Erwägen Sie, dies unter 2/3 zu setzen.',
      setToCurrentModelMaxTokenTip: 'Maximale Token auf 80 % der maximalen Token des aktuellen Modells {{maxToken}} aktualisiert.',
      stop_sequences: 'Stop-Sequenzen',
      stop_sequencesTip: 'Bis zu vier Sequenzen, bei denen die API die Generierung weiterer Token stoppt. Der zurückgegebene Text wird die Stop-Sequenz nicht enthalten.',
      stop_sequencesPlaceholder: 'Sequenz eingeben und Tab drücken',
    },
    tone: {
      Creative: 'Kreativ',
      Balanced: 'Ausgewogen',
      Precise: 'Präzise',
      Custom: 'Benutzerdefiniert',
    },
    addMoreModel: 'Gehen Sie zu den Einstellungen, um mehr Modelle hinzuzufügen',
  },
  menus: {
    status: 'Beta',
    explore: 'Erkunden',
    apps: 'Studio',
    plugins: 'Plugins',
    pluginsTips: 'Integrieren Sie Plugins von Drittanbietern oder erstellen Sie ChatGPT-kompatible KI-Plugins.',
    datasets: 'Wissen',
    datasetsTips: 'BALD VERFÜGBAR: Importieren Sie Ihre eigenen Textdaten oder schreiben Sie Daten in Echtzeit über Webhook, um den LLM-Kontext zu verbessern.',
    newApp: 'Neue App',
    newDataset: 'Wissen erstellen',
    tools: 'Werkzeuge',
  },
  userProfile: {
    settings: 'Einstellungen',
    workspace: 'Arbeitsbereich',
    createWorkspace: 'Arbeitsbereich erstellen',
    helpCenter: 'Hilfe',
    roadmapAndFeedback: 'Feedback',
    community: 'Gemeinschaft',
    about: 'Über',
    logout: 'Abmelden',
  },
  settings: {
    accountGroup: 'KONTO',
    workplaceGroup: 'ARBEITSBEREICH',
    account: 'Mein Konto',
    members: 'Mitglieder',
    billing: 'Abrechnung',
    integrations: 'Integrationen',
    language: 'Sprache',
    provider: 'Modellanbieter',
    dataSource: 'Datenquelle',
    plugin: 'Plugins',
    apiBasedExtension: 'API-Erweiterung',
  },
  account: {
    avatar: 'Avatar',
    name: 'Name',
    email: 'E-Mail',
    password: 'Passwort',
    passwordTip: 'Sie können ein dauerhaftes Passwort festlegen, wenn Sie keine temporären Anmeldecodes verwenden möchten',
    setPassword: 'Ein Passwort festlegen',
    resetPassword: 'Passwort zurücksetzen',
    currentPassword: 'Aktuelles Passwort',
    newPassword: 'Neues Passwort',
    confirmPassword: 'Passwort bestätigen',
    notEqual: 'Die Passwörter sind unterschiedlich.',
    langGeniusAccount: 'Dify-Konto',
    langGeniusAccountTip: 'Ihr Dify-Konto und zugehörige Benutzerdaten.',
    editName: 'Namen bearbeiten',
    showAppLength: '{{length}} Apps anzeigen',
    delete: 'Konto löschen',
    deleteTip: 'Wenn Sie Ihr Konto löschen, werden alle Ihre Daten dauerhaft gelöscht und können nicht wiederhergestellt werden.',
    deleteConfirmTip: 'Zur Bestätigung senden Sie bitte Folgendes von Ihrer registrierten E-Mail-Adresse an ',
  },
  members: {
    team: 'Team',
    invite: 'Hinzufügen',
    name: 'NAME',
    lastActive: 'ZULETZT AKTIV',
    role: 'ROLLEN',
    pending: 'Ausstehend...',
    owner: 'Eigentümer',
    admin: 'Admin',
    adminTip: 'Kann Apps erstellen & Team-Einstellungen verwalten',
    normal: 'Normal',
    normalTip: 'Kann nur Apps verwenden, kann keine Apps erstellen',
    editor: 'Editor',
    editorTip: 'Kann Apps erstellen & bearbeiten',
    inviteTeamMember: 'Teammitglied hinzufügen',
    inviteTeamMemberTip: 'Sie können direkt nach der Anmeldung auf Ihre Teamdaten zugreifen.',
    email: 'E-Mail',
    emailInvalid: 'Ungültiges E-Mail-Format',
    emailPlaceholder: 'Bitte E-Mails eingeben',
    sendInvite: 'Einladung senden',
    invitedAsRole: 'Eingeladen als {{role}}-Benutzer',
    invitationSent: 'Einladung gesendet',
    invitationSentTip: 'Einladung gesendet, und sie können sich bei Dify anmelden, um auf Ihre Teamdaten zuzugreifen.',
    invitationLink: 'Einladungslink',
    failedinvitationEmails: 'Die folgenden Benutzer wurden nicht erfolgreich eingeladen',
    ok: 'OK',
    removeFromTeam: 'Vom Team entfernen',
    removeFromTeamTip: 'Wird den Teamzugang entfernen',
    setAdmin: 'Als Administrator einstellen',
    setMember: 'Als normales Mitglied einstellen',
    setEditor: 'Als Editor einstellen',
    disinvite: 'Einladung widerrufen',
    deleteMember: 'Mitglied löschen',
    you: '(Du)',
  },
  integrations: {
    connected: 'Verbunden',
    google: 'Google',
    googleAccount: 'Mit Google-Konto anmelden',
    github: 'GitHub',
    githubAccount: 'Mit GitHub-Konto anmelden',
    connect: 'Verbinden',
  },
  language: {
    displayLanguage: 'Anzeigesprache',
    timezone: 'Zeitzone',
  },
  provider: {
    apiKey: 'API-Schlüssel',
    enterYourKey: 'Geben Sie hier Ihren API-Schlüssel ein',
    invalidKey: 'Ungültiger OpenAI API-Schlüssel',
    validatedError: 'Validierung fehlgeschlagen: ',
    validating: 'Schlüssel wird validiert...',
    saveFailed: 'API-Schlüssel speichern fehlgeschlagen',
    apiKeyExceedBill: 'Dieser API-SCHLÜSSEL verfügt über kein verfügbares Kontingent, bitte lesen',
    addKey: 'Schlüssel hinzufügen',
    comingSoon: 'Demnächst verfügbar',
    editKey: 'Bearbeiten',
    invalidApiKey: 'Ungültiger API-Schlüssel',
    azure: {
      apiBase: 'API-Basis',
      apiBasePlaceholder: 'Die API-Basis-URL Ihres Azure OpenAI-Endpunkts.',
      apiKey: 'API-Schlüssel',
      apiKeyPlaceholder: 'Geben Sie hier Ihren API-Schlüssel ein',
      helpTip: 'Azure OpenAI Service kennenlernen',
    },
    openaiHosted: {
      openaiHosted: 'Gehostetes OpenAI',
      onTrial: 'IN PROBE',
      exhausted: 'KONTINGENT ERSCHÖPFT',
      desc: 'Der OpenAI-Hostingdienst von Dify ermöglicht es Ihnen, Modelle wie GPT-3.5 zu verwenden. Bevor Ihr Probe-Kontingent aufgebraucht ist, müssen Sie andere Modellanbieter einrichten.',
      callTimes: 'Anrufzeiten',
      usedUp: 'Probe-Kontingent aufgebraucht. Eigenen Modellanbieter hinzufügen.',
      useYourModel: 'Derzeit wird eigener Modellanbieter verwendet.',
      close: 'Schließen',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'IN PROBE',
      exhausted: 'KONTINGENT ERSCHÖPFT',
      desc: 'Leistungsstarkes Modell, das bei einer Vielzahl von Aufgaben von anspruchsvollen Dialogen und kreativer Inhalteerstellung bis hin zu detaillierten Anweisungen hervorragend ist.',
      callTimes: 'Anrufzeiten',
      usedUp: 'Testkontingent aufgebraucht. Eigenen Modellanbieter hinzufügen.',
      useYourModel: 'Derzeit wird eigener Modellanbieter verwendet.',
      close: 'Schließen',
    },
    anthropic: {
      using: 'Die Einbettungsfähigkeit verwendet',
      enableTip: 'Um das Anthropische Modell zu aktivieren, müssen Sie sich zuerst mit OpenAI oder Azure OpenAI Service verbinden.',
      notEnabled: 'Nicht aktiviert',
      keyFrom: 'Holen Sie Ihren API-Schlüssel von Anthropic',
    },
    encrypted: {
      front: 'Ihr API-SCHLÜSSEL wird verschlüsselt und mit',
      back: ' Technologie gespeichert.',
    },
  },
  modelProvider: {
    notConfigured: 'Das Systemmodell wurde noch nicht vollständig konfiguriert, und einige Funktionen sind möglicherweise nicht verfügbar.',
    systemModelSettings: 'Systemmodell-Einstellungen',
    systemModelSettingsLink: 'Warum ist es notwendig, ein Systemmodell einzurichten?',
    selectModel: 'Wählen Sie Ihr Modell',
    setupModelFirst: 'Bitte richten Sie zuerst Ihr Modell ein',
    systemReasoningModel: {
      key: 'System-Reasoning-Modell',
      tip: 'Legen Sie das Standardinferenzmodell fest, das für die Erstellung von Anwendungen verwendet wird, sowie Funktionen wie die Generierung von Dialognamen und die Vorschlagserstellung für die nächste Frage, die auch das Standardinferenzmodell verwenden.',
    },
    embeddingModel: {
      key: 'Einbettungsmodell',
      tip: 'Legen Sie das Standardmodell für die Dokumenteneinbettungsverarbeitung des Wissens fest, sowohl die Wiederherstellung als auch der Import des Wissens verwenden dieses Einbettungsmodell für die Vektorisierungsverarbeitung. Ein Wechsel wird dazu führen, dass die Vektordimension zwischen dem importierten Wissen und der Frage inkonsistent ist, was zu einem Wiederherstellungsfehler führt. Um einen Wiederherstellungsfehler zu vermeiden, wechseln Sie dieses Modell bitte nicht willkürlich.',
      required: 'Einbettungsmodell ist erforderlich',
    },
    speechToTextModel: {
      key: 'Sprach-zu-Text-Modell',
      tip: 'Legen Sie das Standardmodell für die Spracheingabe in Konversationen fest.',
    },
    ttsModel: {
      key: 'Text-zu-Sprache-Modell',
      tip: 'Legen Sie das Standardmodell für die Text-zu-Sprache-Eingabe in Konversationen fest.',
    },
    rerankModel: {
      key: 'Rerank-Modell',
      tip: 'Rerank-Modell wird die Kandidatendokumentenliste basierend auf der semantischen Übereinstimmung mit der Benutzeranfrage neu ordnen und die Ergebnisse der semantischen Rangordnung verbessern',
    },
    quota: 'Kontingent',
    searchModel: 'Suchmodell',
    noModelFound: 'Kein Modell für {{model}} gefunden',
    models: 'Modelle',
    showMoreModelProvider: 'Zeige mehr Modellanbieter',
    selector: {
      tip: 'Dieses Modell wurde entfernt. Bitte fügen Sie ein Modell hinzu oder wählen Sie ein anderes Modell.',
      emptyTip: 'Keine verfügbaren Modelle',
      emptySetting: 'Bitte gehen Sie zu den Einstellungen, um zu konfigurieren',
      rerankTip: 'Bitte richten Sie das Rerank-Modell ein',
    },
    card: {
      quota: 'KONTINGENT',
      onTrial: 'In Probe',
      paid: 'Bezahlt',
      quotaExhausted: 'Kontingent erschöpft',
      callTimes: 'Anrufzeiten',
      tokens: 'Token',
      buyQuota: 'Kontingent kaufen',
      priorityUse: 'Priorisierte Nutzung',
      removeKey: 'API-Schlüssel entfernen',
      tip: 'Der bezahlten Kontingent wird Vorrang gegeben. Das Testkontingent wird nach dem Verbrauch des bezahlten Kontingents verwendet.',
    },
    item: {
      deleteDesc: '{{modelName}} werden als System-Reasoning-Modelle verwendet. Einige Funktionen stehen nach der Entfernung nicht zur Verfügung. Bitte bestätigen.',
      freeQuota: 'KOSTENLOSES KONTINGENT',
    },
    addApiKey: 'Fügen Sie Ihren API-Schlüssel hinzu',
    invalidApiKey: 'Ungültiger API-Schlüssel',
    encrypted: {
      front: 'Ihr API-SCHLÜSSEL wird verschlüsselt und mit',
      back: ' Technologie gespeichert.',
    },
    freeQuota: {
      howToEarn: 'Wie zu verdienen',
    },
    addMoreModelProvider: 'MEHR MODELLANBIETER HINZUFÜGEN',
    addModel: 'Modell hinzufügen',
    modelsNum: '{{num}} Modelle',
    showModels: 'Modelle anzeigen',
    showModelsNum: 'Zeige {{num}} Modelle',
    collapse: 'Einklappen',
    config: 'Konfigurieren',
    modelAndParameters: 'Modell und Parameter',
    model: 'Modell',
    featureSupported: '{{feature}} unterstützt',
    callTimes: 'Anrufzeiten',
    credits: 'Nachrichtenguthaben',
    buyQuota: 'Kontingent kaufen',
    getFreeTokens: 'Kostenlose Token erhalten',
    priorityUsing: 'Bevorzugte Nutzung',
    deprecated: 'Veraltet',
    confirmDelete: 'Löschung bestätigen?',
    quotaTip: 'Verbleibende verfügbare kostenlose Token',
    loadPresets: 'Voreinstellungen laden',
    parameters: 'PARAMETER',
  },
  dataSource: {
    add: 'Eine Datenquelle hinzufügen',
    connect: 'Verbinden',
    notion: {
      title: 'Notion',
      description: 'Notion als Datenquelle für das Wissen verwenden.',
      connectedWorkspace: 'Verbundener Arbeitsbereich',
      addWorkspace: 'Arbeitsbereich hinzufügen',
      connected: 'Verbunden',
      disconnected: 'Getrennt',
      changeAuthorizedPages: 'Autorisierte Seiten ändern',
      pagesAuthorized: 'Autorisierte Seiten',
      sync: 'Synchronisieren',
      remove: 'Entfernen',
      selector: {
        pageSelected: 'Ausgewählte Seiten',
        searchPages: 'Seiten suchen...',
        noSearchResult: 'Keine Suchergebnisse',
        addPages: 'Seiten hinzufügen',
        preview: 'VORSCHAU',
      },
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'API-Schlüssel',
      apiKeyPlaceholder: 'Geben Sie Ihren API-Schlüssel ein',
      keyFrom: 'Holen Sie Ihren SerpAPI-Schlüssel von der SerpAPI-Kontoseite',
    },
  },
  apiBasedExtension: {
    title: 'API-Erweiterungen bieten zentralisiertes API-Management und vereinfachen die Konfiguration für eine einfache Verwendung in Difys Anwendungen.',
    link: 'Erfahren Sie, wie Sie Ihre eigene API-Erweiterung entwickeln.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'API-Erweiterung hinzufügen',
    selector: {
      title: 'API-Erweiterung',
      placeholder: 'Bitte wählen Sie API-Erweiterung',
      manage: 'API-Erweiterung verwalten',
    },
    modal: {
      title: 'API-Erweiterung hinzufügen',
      editTitle: 'API-Erweiterung bearbeiten',
      name: {
        title: 'Name',
        placeholder: 'Bitte geben Sie den Namen ein',
      },
      apiEndpoint: {
        title: 'API-Endpunkt',
        placeholder: 'Bitte geben Sie den API-Endpunkt ein',
      },
      apiKey: {
        title: 'API-Schlüssel',
        placeholder: 'Bitte geben Sie den API-Schlüssel ein',
        lengthError: 'Die Länge des API-Schlüssels darf nicht weniger als 5 Zeichen betragen',
      },
    },
    type: 'Typ',
  },
  about: {
    changeLog: 'Änderungsprotokoll',
    updateNow: 'Jetzt aktualisieren',
    nowAvailable: 'Dify {{version}} ist jetzt verfügbar.',
    latestAvailable: 'Dify {{version}} ist die neueste verfügbare Version.',
  },
  appMenus: {
    overview: 'Übersicht',
    promptEng: 'Orchestrieren',
    apiAccess: 'API-Zugriff',
    logAndAnn: 'Protokolle & Ank.',
  },
  environment: {
    testing: 'TESTEN',
    development: 'ENTWICKLUNG',
  },
  appModes: {
    completionApp: 'Textgenerator',
    chatApp: 'Chat-App',
  },
  datasetMenus: {
    documents: 'Dokumente',
    hitTesting: 'Wiederherstellungstest',
    settings: 'Einstellungen',
    emptyTip: 'Das Wissen wurde nicht zugeordnet, bitte gehen Sie zur Anwendung oder zum Plug-in, um die Zuordnung abzuschließen.',
    viewDoc: 'Dokumentation anzeigen',
    relatedApp: 'verbundene Apps',
  },
  voiceInput: {
    speaking: 'Sprechen Sie jetzt...',
    converting: 'Umwandlung in Text...',
    notAllow: 'Mikrofon nicht autorisiert',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Flüstern-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Konversation umbenennen',
    conversationName: 'Konversationsname',
    conversationNamePlaceholder: 'Bitte geben Sie den Konversationsnamen ein',
    conversationNameCanNotEmpty: 'Konversationsname erforderlich',
    citation: {
      title: 'ZITIERUNGEN',
      linkToDataset: 'Link zum Wissen',
      characters: 'Zeichen:',
      hitCount: 'Abrufanzahl:',
      vectorHash: 'Vektorhash:',
      hitScore: 'Abrufwertung:',
    },
  },
  promptEditor: {
    placeholder: 'Schreiben Sie hier Ihr Aufforderungswort, geben Sie \'{\' ein, um eine Variable einzufügen, geben Sie \'/\' ein, um einen Aufforderungs-Inhaltsblock einzufügen',
    context: {
      item: {
        title: 'Kontext',
        desc: 'Kontextvorlage einfügen',
      },
      modal: {
        title: '{{num}} Wissen im Kontext',
        add: 'Kontext hinzufügen',
        footer: 'Sie können Kontexte im unten stehenden Kontextabschnitt verwalten.',
      },
    },
    history: {
      item: {
        title: 'Konversationsgeschichte',
        desc: 'Vorlage für historische Nachricht einfügen',
      },
      modal: {
        title: 'BEISPIEL',
        user: 'Hallo',
        assistant: 'Hallo! Wie kann ich Ihnen heute helfen?',
        edit: 'Konversationsrollennamen bearbeiten',
      },
    },
    variable: {
      item: {
        title: 'Variablen & Externe Werkzeuge',
        desc: 'Variablen & Externe Werkzeuge einfügen',
      },
      modal: {
        add: 'Neue Variable',
        addTool: 'Neues Werkzeug',
      },
    },
    query: {
      item: {
        title: 'Abfrage',
        desc: 'Benutzerabfragevorlage einfügen',
      },
    },
    existed: 'Bereits im Aufforderungstext vorhanden',
  },
  imageUploader: {
    uploadFromComputer: 'Vom Computer hochladen',
    uploadFromComputerReadError: 'Bildlesung fehlgeschlagen, bitte versuchen Sie es erneut.',
    uploadFromComputerUploadError: 'Bildupload fehlgeschlagen, bitte erneut hochladen.',
    uploadFromComputerLimit: 'Hochgeladene Bilder dürfen {{size}} MB nicht überschreiten',
    pasteImageLink: 'Bildlink einfügen',
    pasteImageLinkInputPlaceholder: 'Bildlink hier einfügen',
    pasteImageLinkInvalid: 'Ungültiger Bildlink',
    imageUpload: 'Bild-Upload',
  },
  tag: {
    placeholder: 'Alle Tags',
    addNew: 'Neues Tag hinzufügen',
    noTag: 'Keine Tags',
    noTagYet: 'Noch keine Tags',
    addTag: 'Tags hinzufügen',
    editTag: 'Tags bearbeiten',
    manageTags: 'Tags verwalten',
    selectorPlaceholder: 'Typ zum Suchen oder Erstellen',
    create: 'Erstellen',
    delete: 'Tag löschen',
    deleteTip: 'Das Tag wird verwendet, löschen?',
    created: 'Tag erfolgreich erstellt',
    failed: 'Tag-Erstellung fehlgeschlagen',
  },
}

export default translation
