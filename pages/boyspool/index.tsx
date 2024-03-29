import { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";
import { Button, Meta, TierCard } from "../../components";
import { lionOptions, noLionOptions } from "../../lib/donorAmounts";
import { useDispatch } from "react-redux";
import { OptionTiers } from "../../types/tiers";
import Link from "next/link";
import { setClose, setOpen } from "../../hooks/redux/closeTier";
import { Layout } from "../../components";

const BoysPool: NextPage = () => {
  const [tier, setTier] = useState<OptionTiers | null>(null);
  const [isCustom, setIsCustom] = useState(false);
  const [custom, setCustom] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const donationTier = (option: OptionTiers) => {
    setTier({
      title: option.title,
      amount: option.amount,
      image: option.image,
      school: "boyspool",
    });
    dispatch(setClose());
  };

  const handleCustom = () => {
    setIsCustom(false);
    setTier({
      title: "Custom",
      amount: custom,
      image: "",
      school: "boyspool",
    });
    dispatch(setOpen());
  };

  const fullDonationTier = (option: OptionTiers) => {
    console.log(option.image);

    if (option.amount == "custom") {
      setIsCustom(true);
    } else {
      setTier({
        title: option.title,
        amount: option.amount,
        image: option.image,
        school: "boyspool",
      });
      dispatch(setOpen());
    }
  };

  return (
    <Layout>
      <Meta title="Donate" description="Donate to student" />
      <main className="donate container">
        <div className="donate__donations">
          <div className={`donate__tier-options ${tier ? "hideDonate" : ""} `}>
            <div className="donate__title-section">
              <FaChevronLeft
                onClick={() => router.back()}
                className="go-back"
                size={35}
                color={"#374756"}
              />
            </div>
            <div>
              <h3>Fund scholarships with crypto - get a DirectEd Lion NFT</h3>
              <h4>DirectEd Lions Collection</h4>

              {/* <p>
								<span>
									Donate using using credit card, $ADA, $SOL, $ETH
								</span>
							</p> */}

              <p>Click tiers to learn more</p>
              <div className="donate__tiers">
                {lionOptions.map((option) => (
                  <Button
                    size="small"
                    variant={option.title === tier?.title ? "primary" : ""}
                    onClick={() => donationTier(option)}
                    key={option.amount}
                    noShadow
                  >
                    {option.title}
                  </Button>
                ))}
              </div>
            </div>
            <div className="donate__info">
              <span> Fund scholarships with credit card</span>
              <p>No DirectEd Lions Collection NFT</p>

              {/* <div className='donate__buttons'>

								<Link href="https://donate.stripe.com/00g5o56na3jF3wk4gm" target='_blank'>
									<Button size='small' noShadow>
										$500
									</Button>
								</Link>
								<Link href="https://donate.stripe.com/fZe7wdaDq3jF8QE14d" target='_blank'>
									<Button size='small' noShadow>
										$1100
									</Button>
								</Link>




								{isCustom ? (
                <div className="donate__tiers">
                  <input
                    type="text"
                    placeholder="Custom Amount"
                    onChange={(e) => setCustom(e.target.value)}
                  />
                  <Link href="">
                    <Button size="small" noShadow onClick={handleCustom}>
                      Donate
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="donate__tiers">
                  {noLionOptions.map((option) => (
                    <Button
                      size="small"
                      noShadow
                      variant={option.title === tier?.title ? "primary" : ""}
                      onClick={() => fullDonationTier(option)}
                    >
                      {option.title}
                    </Button>
                  ))}
                </div>
              )}
							</div> */}

              {isCustom ? (
                <div className="donate__tiers">
                  <Link href="">
                    <Button size="small" noShadow onClick={handleCustom}>
                      Donate
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="donate__tiers">
                  {noLionOptions.map((option) => (
                    <Button
                      size="small"
                      noShadow
                      variant={option.title === tier?.title ? "primary" : ""}
                      onClick={() => fullDonationTier(option)}
                    >
                      {option.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="tier">
            {tier && (
              <TierCard
                onClick={() => setTier(null)}
                title={tier?.title}
                amount={tier?.amount}
                image={tier?.image}
                school={tier?.school}
              />
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BoysPool;
