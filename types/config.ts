export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  siteUrl: string;
  oneTapClientId?: string;
  stripe: {
    plans: {
      isFeatured?: boolean;
      priceId: string;
      annualDiscountPriceId?: string;
      name: string;
      description?: string;
      features: {
        name: string;
      }[];
      limits?: Record<string, number>;
      freeTrial?: {
        days: number;
      };
    }[];
  };
  aws?: {
    bucket?: string;
    bucketUrl?: string;
    cdn?: string;
  };
  resend: {
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
  };
  auth: {
    loginUrl: string;
    callbackUrl: string;
  };
}
