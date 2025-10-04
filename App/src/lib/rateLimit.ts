import LRU from "lru-cache";

type Options = {
    uniqueTokenPerInterval?: number;
    interval?: number;
    maxInInterval?: number;
};

export function rateLimit(options?: Options) {
    const tokenCache = new LRU({
        max: options?.uniqueTokenPerInterval || 500,
        ttl: options?.interval || 60 * 1000,// default 1 minute
    });

    return {
        check: (token: string, limit: number) =>
        new Promise<void>((resolve, reject) => {
            const tokenCount = (tokenCache.get(token) as number[]) || [0];
            tokenCount[0] += 1;
            tokenCache.set(token, tokenCount);

            const currentUsage = tokenCount[0];
            if (currentUsage > limit) {
                reject(new Error("Rate limit exceeded"));
            } else {
                resolve();
            }
        }),
    };
}
