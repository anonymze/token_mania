import { Button } from "@/components/ui/button";

interface PromotionCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  backgroundColor: string;
  textColor?: string;
  ctaText: string;
  ctaLink: string;
  className?: string;
}

export function PromotionCard({
  id,
  title,
  subtitle,
  description,
  image,
  backgroundColor,
  textColor = "text-gray-900",
  ctaText,
  ctaLink,
  className = ""
}: PromotionCardProps) {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${className}`}
      style={{ backgroundColor }}
      itemScope
      itemType="https://schema.org/Offer"
    >
      <div className="relative h-full min-h-[200px] flex flex-col justify-between p-6">
        <div className="flex-1">
          {subtitle && (
            <p className={`text-sm font-medium mb-2 ${textColor} opacity-80`}>
              {subtitle}
            </p>
          )}

          <h2 className={`text-2xl font-bold mb-2 ${textColor}`} itemProp="name">
            {title}
          </h2>

          <p className={`text-sm ${textColor} opacity-80 mb-4`} itemProp="description">
            {description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <Button
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-inherit border-0"
            asChild
          >
            <a href={ctaLink} itemProp="url">
              {ctaText}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Button>

          {image && (
            <div className="w-24 h-24 rounded-full overflow-hidden ml-4">
              <img
                src={image}
                alt={`${title} promotion`}
                className="w-full h-full object-cover"
                loading="lazy"
                width="96"
                height="96"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
