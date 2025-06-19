export interface QuestionJson {
    title: string;
    titleSlug: string;
    questionId: string;
    questionFrontendId: string;
    questionTitle: string;
    translatedTitle: null;
    content: string;
    translatedContent: null;
    categoryTitle: string;
    difficulty: string;
    stats: string;
    companyTagStatsV2: null;
    mysqlSchemas: any[];
    dataSchemas: any[];
    frontendPreviews: string;
    likes: number;
    dislikes: number;
    isPaidOnly: boolean;
    status: null;
    canSeeQuestion: boolean;
    enableTestMode: boolean;
    metaData: string;
    enableRunCode: boolean;
    enableSubmit: boolean;
    enableDebugger: boolean;
    envInfo: string;
    isLiked: null;
    nextChallenges: any[];
    libraryUrl: null;
    adminUrl: null;
    hints: any[];
    codeSnippets: CodeSnippet[];
    exampleTestcaseList: string[];
    hasFrontendPreview: boolean;
}

export interface CodeSnippet {
    code: string;
    lang: string;
    langSlug: string;
}