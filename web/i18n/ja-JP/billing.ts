const translation = {
  currentPlan: '現在のプラン',
  usagePage: {
    teamMembers: 'チームメンバー',
    buildApps: 'アプリを作成する',
    annotationQuota: 'アノテーション・クォータ',
    documentsUploadQuota: 'ドキュメント・アップロード・クォータ',
    vectorSpace: '知識データストレージ',
    vectorSpaceTooltip: '高品質インデックスモードのドキュメントは、知識データストレージのリソースを消費します。知識データストレージの上限に達すると、新しいドキュメントはアップロードされません。',
  },
  upgradeBtn: {
    plain: 'プランをアップグレード',
    encourage: '今すぐアップグレード',
    encourageShort: 'アップグレード',
  },
  viewBilling: '請求とサブスクリプションの管理',
  buyPermissionDeniedTip: 'サブスクリプションするには、エンタープライズ管理者に連絡してください',
  plansCommon: {
    title: 'あなたのAIの旅を支える価格設定',
    freeTrialTipPrefix: 'サインアップ後、',
    freeTrialTip: '200回のOpenAIコールの無料に受け取る',
    freeTrialTipSuffix: '。クレジットカード不要',
    yearlyTip: '10ヶ月分支払って、1年間楽しもう！',
    mostPopular: '人気',
    cloud: 'クラウドサービス',
    self: 'セルフホストサービス',
    planRange: {
      monthly: '月額',
      yearly: '年額',
    },
    month: '月',
    year: '年',
    save: '節約 ',
    free: '無料',
    annualBilling: '年次請求',
    comparePlanAndFeatures: 'プランと機能を比較する',
    priceTip: 'ワークスペース/',
    currentPlan: '現在のプラン',
    contractSales: '営業に連絡する',
    contractOwner: 'チームマネージャーに連絡する',
    startForFree: '無料で始める',
    getStarted: '始める',
    contactSales: '営業に連絡する',
    talkToSales: '営業と話す',
    modelProviders: 'OpenAI/Anthropic/Llama2/Azure OpenAI/Hugging Face/Replicateをサポート',
    teamWorkspace: '{{count,number}}チームワークスペース',
    teamMember_one: 'チームメンバー：{{count,number}}人',
    teamMember_other: 'チームメンバー：{{count,number}}人',
    annotationQuota: 'アノテーション・クォータ',
    buildApps: 'アプリの数：{{count,number}}個',
    documents: '{{count,number}}の知識文書',
    documentsTooltip: 'ナレッジデータソースからインポートされたドキュメントの数に対するクォータ。',
    vectorSpace: '{{size}}の知識データストレージ',
    vectorSpaceTooltip: '高品質インデックスモードのドキュメントは、知識データストレージのリソースを消費します。知識データストレージの上限に達すると、新しいドキュメントはアップロードされません。',
    documentsRequestQuota: '{{count,number}}/分のナレッジ リクエストのレート制限',
    documentsRequestQuotaTooltip: 'ナレッジベース内でワークスペースが1分間に実行できる操作の総数を示します。これには、データセットの作成、削除、更新、ドキュメントのアップロード、修正、アーカイブ、およびナレッジベースクエリが含まれます。この指標は、ナレッジベースリクエストのパフォーマンスを評価するために使用されます。例えば、Sandbox ユーザーが1分間に10回連続でヒットテストを実行した場合、そのワークスペースは次の1分間、データセットの作成、削除、更新、ドキュメントのアップロードや修正などの操作を一時的に実行できなくなります。',
    documentProcessingPriority: '文書処理',
    priority: {
      'standard': '標準',
      'priority': '優先',
      'top-priority': '最優先',
    },
    logsHistory: '{{days}}のログ履歴',
    customTools: 'カスタムツール',
    unavailable: '利用不可',
    days: '日間',
    unlimited: '無制限',
    support: 'サポート',
    supportItems: {
      communityForums: 'コミュニティフォーラム',
      emailSupport: 'メールサポート',
      priorityEmail: '優先メール＆チャットサポート',
      logoChange: 'ロゴ変更',
      SSOAuthentication: 'SSO認証',
      personalizedSupport: '個別サポート',
      dedicatedAPISupport: '専用APIサポート',
      customIntegration: 'カスタム統合とサポート',
      ragAPIRequest: 'RAG APIリクエスト',
      bulkUpload: 'ドキュメントの一括アップロード',
      agentMode: 'エージェントモード',
      workflow: 'ワークフロー',
      llmLoadingBalancing: 'LLMロードバランシング',
      llmLoadingBalancingTooltip: 'APIレート制限を効果的に回避するために、モデルに複数のAPIキーを追加する。',
    },
    comingSoon: '近日公開',
    member: 'メンバー',
    memberAfter: 'メンバー',
    messageRequest: {
      title: '{{count,number}}メッセージ',
      titlePerMonth: '{{count,number}}メッセージ/月',
      tooltip: 'Open Alモデルを使用するさまざまなプランのメッセージ呼び出しクォータ。上限を超えるメッセージは、Open AI APIキーを使用します。',
    },
    annotatedResponse: {
      title: '{{count,number}}の注釈クォータ制限',
      tooltip: '手動での回答の編集と注釈により、カスタマイズ可能な高品質の質問応答機能をアプリに提供します。（チャットアプリのみに適用）',
    },
    ragAPIRequestTooltip: 'Difyのナレッジベース処理機能のみを呼び出すAPI呼び出しの数を指します。',
    receiptInfo: 'チームオーナーとチーム管理者のみが購読および請求情報を表示できます',
  },
  plans: {
    sandbox: {
      name: 'Sandbox',
      description: 'コア機能を無料で試す',
    },
    professional: {
      name: 'Professional',
      description: '独立した開発者/小規模チーム向け',
    },
    team: {
      name: 'Team',
      description: '中規模チーム向け',
    },
    community: {
      name: 'Community',
      description: '個人ユーザー、小規模チーム、または非営利プロジェクト向け',
      price: '無料',
      btnText: 'コミュニティを始めましょう',
      includesTitle: '無料の機能:',
      features: [
        'すべてのコア機能がパブリック リポジトリでリリースされる',
        '単一のワークスペース',
        'Difyオープンソースライセンスに準拠しています',
      ],
    },
    premium: {
      name: 'Premium',
      description: '中規模の組織やチーム向け',
      price: 'スケーラブル',
      priceTip: 'クラウドマーケットプレイスに基づく',
      btnText: 'プレミアムを獲得する',
      includesTitle: 'コミュニティからのすべてに加えて:',
      comingSoon: 'Microsoft AzureとGoogle Cloudのアポートは近日公開',
      features: [
        'さまざまなクラウドプロバイダーによる自己管理の信頼性',
        '単一のワークスペース',
        'カスタマイズ Webアプリのロゴやブランド',
        '優先メールとチャットのサポート',
      ],
    },
    enterprise: {
      name: 'Enterprise',
      description: 'エンタープライズグレードのセキュリティ、コンプライアンス、拡張性、制御、およびより高度な機能を必要とする企業向け',
      price: 'カスタム',
      priceTip: '年間契約のみ',
      btnText: '営業担当者へのお問い合わせ',
      includesTitle: 'プレミアムのすべてに加えて:',
      features: [
        'エンタープライズグレードのスケーラブルな導入ソリューション',
        '商用ライセンスの認可',
        'エンタープライズ限定の機能',
        '複数のワークスペースと企業の管理',
        'SSO',
        'Dify Partnersによる交渉済みのSLA',
        '高度なセキュリティ',
        'Dify公式によるアップデートとメンテナンス',
        '専門的な技術サポート',
      ],
    },
  },
  vectorSpace: {
    fullTip: '知識データストレージがいっぱいです。',
    fullSolution: 'より多くのスペースを得るためにプランをアップグレードしてください。',
  },
  apps: {
    fullTipLine1: 'より多くのアプリを作成するには、',
    fullTipLine2: 'プランをアップグレードしてください。',
  },
  annotatedResponse: {
    fullTipLine1: 'より多くの会話を注釈するには、',
    fullTipLine2: 'プランをアップグレードしてください。',
    quotaTitle: '注釈返信クォータ',
  },
}

export default translation
