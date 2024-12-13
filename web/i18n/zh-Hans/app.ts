const translation = {
  createApp: '创建应用',
  types: {
    all: '全部',
    chatbot: '聊天助手',
    agent: 'Agent',
    workflow: '工作流',
    completion: '文本生成',
    advanced: 'Chatflow',
    basic: '基础编排',
  },
  duplicate: '复制',
  mermaid: {
    handDrawn: '手绘',
    classic: '经典',
  },
  duplicateTitle: '复制应用',
  export: '导出 DSL',
  exportFailed: '导出 DSL 失败',
  importDSL: '导入 DSL 文件',
  createFromConfigFile: '通过 DSL 文件创建',
  importFromDSL: '导入 DSL',
  importFromDSLFile: '文件',
  importFromDSLUrl: 'URL',
  importFromDSLUrlPlaceholder: '输入 DSL 文件的 URL',
  deleteAppConfirmTitle: '确认删除应用?',
  deleteAppConfirmContent:
    '删除应用将无法撤销。用户将不能访问你的应用，所有 Prompt 编排配置和日志均将一并被删除。',
  appDeleted: '应用已删除',
  appDeleteFailed: '应用删除失败',
  join: '参与社区',
  communityIntro: '与团队成员、贡献者和开发者在不同频道中交流',
  roadmap: '产品路线图',
  newApp: {
    learnMore: '了解更多',
    startFromBlank: '创建空白应用',
    startFromTemplate: '从应用模版创建',
    captionAppType: '想要哪种应用类型？',
    foundResult: '{{count}} 个结果',
    foundResults: '{{count}} 个结果',
    noAppsFound: '未找到应用',
    noTemplateFound: '未找到模板',
    noTemplateFoundTip: '请尝试使用不同的关键字进行搜索。',
    chatbotShortDescription: '简单配置即可构建基于 LLM 的对话机器人',
    chatbotUserDescription: '通过简单的配置快速搭建一个基于 LLM 的对话机器人。支持切换为 Chatflow 编排。',
    completionShortDescription: '用于文本生成任务的 AI 助手',
    completionUserDescription: '通过简单的配置快速搭建一个面向文本生成类任务的 AI 助手。',
    completionWarning: '该类型不久后将不再支持创建',
    agentShortDescription: '具备推理与自主工具调用的智能助手',
    agentUserDescription: '能够迭代式的规划推理、自主工具调用，直至完成任务目标的智能助手。',
    workflowShortDescription: '面向单轮自动化任务的编排工作流',
    workflowUserDescription: '基于工作流编排，适用于自动化、批处理等单轮生成类任务的场景。',
    workflowWarning: '正在进行 Beta 测试',
    advancedShortDescription: '支持记忆的复杂多轮对话工作流',
    advancedUserDescription: '基于工作流编排，适用于定义等复杂流程的多轮对话场景，具有记忆功能。',
    chooseAppType: '选择应用类型',
    forBeginners: '新手适用',
    forAdvanced: '进阶用户适用',
    noIdeaTip: '没有想法？试试我们的模板',
    captionName: '应用名称 & 图标',
    appNamePlaceholder: '给你的应用起个名字',
    optional: '可选',
    captionDescription: '描述',
    appDescriptionPlaceholder: '输入应用的描述',
    useTemplate: '使用该模板',
    previewDemo: '预览 Demo',
    chatApp: '助手',
    chatAppIntro:
      '我要构建一个聊天场景的应用。该应用采用一问一答模式与用户持续对话。',
    agentAssistant: '新的智能助手',
    completeApp: '文本生成应用',
    completeAppIntro:
      '我要构建一个根据提示生成高质量文本的应用，例如生成文章、摘要、翻译等',
    showTemplates: '我想从范例模板中选择',
    hideTemplates: '返回应用类型选择',
    Create: '创建',
    Cancel: '取消',
    nameNotEmpty: '名称不能为空',
    appTemplateNotSelected: '请选择应用模版',
    appTypeRequired: '请选择应用类型',
    appCreated: '应用已创建',
    caution: '注意',
    appCreateDSLWarning: '注意：DSL 版本差异可能影响部分功能表现',
    appCreateDSLErrorTitle: '版本不兼容',
    appCreateDSLErrorPart1: '检测到 DSL 版本差异较大，强制导入应用可能无法正常运行。',
    appCreateDSLErrorPart2: '是否继续？',
    appCreateDSLErrorPart3: '当前应用 DSL 版本：',
    appCreateDSLErrorPart4: '系统支持 DSL 版本：',
    appCreateFailed: '应用创建失败',
    Confirm: '确认',
  },
  newAppFromTemplate: {
    byCategories: '分类',
    searchAllTemplate: '搜索所有模版...',
    sidebar: {
      Recommended: '推荐',
      Agent: 'Agent',
      Assistant: '助手',
      HR: '人力资源',
      Workflow: '工作流',
      Writing: '写作',
      Programming: '编程',
    },
  },
  editApp: '编辑信息',
  editAppTitle: '编辑应用信息',
  editDone: '应用信息已更新',
  editFailed: '更新应用信息失败',
  iconPicker: {
    ok: '确认',
    cancel: '取消',
    emoji: '表情符号',
    image: '图片',
  },
  answerIcon: {
    title: '使用 WebApp 图标替换 🤖',
    description: '是否使用 WebApp 图标替换分享的应用界面中的 🤖',
    descriptionInExplore: '是否使用 WebApp 图标替换 Explore 界面中的 🤖',
  },
  switch: '迁移为工作流编排',
  switchTipStart: '将为您创建一个使用工作流编排的新应用。新应用将',
  switchTip: '不能够',
  switchTipEnd: '迁移回基础编排',
  switchLabel: '新应用创建为',
  removeOriginal: '删除原应用',
  switchStart: '开始迁移',
  typeSelector: {
    all: '所有类型',
    chatbot: '聊天助手',
    agent: 'Agent',
    workflow: '工作流',
    completion: '文本生成',
    advanced: 'Chatflow',
  },
  tracing: {
    title: '追踪应用性能',
    description: '配置第三方 LLMOps 提供商并跟踪应用程序性能。',
    config: '配置',
    view: '查看',
    collapse: '折叠',
    expand: '展开',
    tracing: '追踪',
    disabled: '已禁用',
    disabledTip: '请先配置提供商',
    enabled: '已启用',
    tracingDescription: '捕获应用程序执行的完整上下文，包括 LLM 调用、上下文、提示、HTTP 请求等，发送到第三方跟踪平台。',
    configProviderTitle: {
      configured: '已配置',
      notConfigured: '配置提供商以启用追踪',
      moreProvider: '更多提供商',
    },
    langsmith: {
      title: 'LangSmith',
      description: '一个全方位的开发者平台，适用于 LLM 驱动应用程序生命周期的每个步骤。',
    },
    langfuse: {
      title: 'Langfuse',
      description: '跟踪、评估、提示管理和指标，以调试和改进您的 LLM 应用程序。',
    },
    inUse: '使用中',
    configProvider: {
      title: '配置 ',
      placeholder: '输入你的{{key}}',
      project: '项目',
      publicKey: '公钥',
      secretKey: '密钥',
      viewDocsLink: '查看 {{key}} 的文档',
      removeConfirmTitle: '删除 {{key}} 配置?',
      removeConfirmContent: '当前配置正在使用中，删除它将关闭追踪功能。',
    },
  },
  openInExplore: '在“探索”中打开',
}

export default translation
