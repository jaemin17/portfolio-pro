export const syncSpaceAssets = {
  hero: {
    helmet: "/images/sync-space/helmet-login-1200w.png",
    tablet: "/images/sync-space/tablet-create-space-800w.png",
    mobile: "/images/sync-space/mobile-space-800w.png",
    web: "/images/sync-space/web-resources-1200w.png",
  },
  flow: {
    tabletCreate: "/images/sync-space/tablet-create-space-800w.png",
    helmetLogin: "/images/sync-space/helmet-login-1200w.png",
    mobileSpace: "/images/sync-space/mobile-space-800w.png",
    webResources: "/images/sync-space/web-resources-1200w.png",
    helmetResources: "/images/sync-space/helmet-resources-1200w.png",
    mobileLearning: "/images/sync-space/mobile-learning-800w.png",
  },
  xr: {
    helmetLogin: "/images/sync-space/helmet-login-1200w.png",
    helmetHome: "/images/sync-space/helmet-home-1200w.png",
  },
  visual: {
    mobileSpace: "/images/sync-space/mobile-space-800w.png",
    webResources: "/images/sync-space/web-resources-1200w.png",
    helmetHome: "/images/sync-space/helmet-home-1200w.png",
  },
  coverage: [
    { src: "/images/sync-space/tablet-users-800w.png", label: { zh: "用户 / 小组", en: "Users / groups" } },
    { src: "/images/sync-space/tablet-resources-800w.png", label: { zh: "资源管理", en: "Resource management" } },
    { src: "/images/sync-space/web-upload-1200w.png", label: { zh: "传输列表", en: "Transfer list" } },
    { src: "/images/sync-space/mobile-profile-800w.png", label: { zh: "个人中心", en: "Profile" } },
  ],
} as const;
