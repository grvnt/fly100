import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  return (
    <section className="bg-background text-foreground overflow-hidden" id="pricing">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-20 max-w-3xl">
          <Badge variant="secondary" className="mb-8">Pricing</Badge>
          <h2 className="font-bold text-3xl lg:text-4xl tracking-tight">
            Get the mentorship you need to reach your XC goals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          {config.stripe.plans.map((plan) => (
            <Card 
              key={plan.priceId} 
              className={`flex flex-col ${plan.isFeatured ? "border-primary" : ""} relative h-full`}
            >
              {plan.isFeatured && (
                <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Coaching Programme
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                {plan.description && (
                  <CardDescription>{plan.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-extrabold tracking-tight">R{plan.price}</span>
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/year</span>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] text-primary shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto">
                  <ButtonCheckout priceId={plan.priceId} />
                  <p className="mt-4 text-sm text-center text-muted-foreground">
                    Annual Access.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

