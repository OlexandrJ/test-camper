import { PiWind } from "react-icons/pi";
import { returnDetailsItem } from "helpers";
import {
  AdultsIcon,
  BedroomIcon,
  KitchenIcon,
  PetrolIcon,
  TransIcon,
  ConditionerIcon,
  CdIcon,
  RadioIcon,
  HobIcon,
  TvIcon,
  ShowerIcon,
  ToiletIcon,
  FreezerIcon,
  GasIcon,
  WaterIcon,
  MicrowaveIcon,
} from "components/Icons";
import { DetailsList } from "components/AdvertCard/AdvertCard.styled";
import {
  FeatureReviewsWrap,
  DetailsItemsWrap,
  VehicleDetailsWrap,
  VehicleDetailsList,
} from "./Features.styled";

const Features = ({
  card: {
    airConditioner,
    toilet,
    kitchen,
    microwave,
    shower,
    freezer,
    TV,
    hob,
    CD,
    beds,
    radio,
    gas,
    water,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  return (
    <FeatureReviewsWrap>
      <DetailsItemsWrap>
        <DetailsList>
          <li>
            <AdultsIcon width={20} height={20} /> {`${adults} adults`}
          </li>

          <li className="capitalize">
            <TransIcon width={20} height={20} />
            {transmission}
          </li>

          {returnDetailsItem(
            airConditioner,
            "AC",
            <PiWind
              width={20}
              height={20}
              style={{ fill: "var(--text-color)" }}
            />
          )}

          <li className="capitalize">
            <PetrolIcon width={20} height={20} />
            {engine}
          </li>

          {returnDetailsItem(
            kitchen,
            "kitchen",
            <KitchenIcon width={20} height={20} />
          )}

          <li>
            <BedroomIcon width={20} height={20} />
            {`${beds} beds`}
          </li>

          <li>
            <ConditionerIcon width={20} height={20} />
            {`${airConditioner} air conditioner`}
          </li>

          {returnDetailsItem(CD, "CD", <CdIcon width={20} height={20} />)}
          {returnDetailsItem(
            radio,
            "Radio",
            <RadioIcon width={20} height={20} />
          )}
          {returnDetailsItem(TV, "TV", <TvIcon width={20} height={20} />)}
          {returnDetailsItem(
            hob,
            `${hob} hob`,
            <HobIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            shower,
            `${shower} shower`,
            <ShowerIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            freezer,
            `${freezer} freezer`,
            <FreezerIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            toilet,
            `${toilet} toilet`,
            <ToiletIcon width={20} height={20} />
          )}
          {returnDetailsItem(
            microwave,
            `${microwave} microwave`,
            <MicrowaveIcon width={20} height={20} />
          )}
          {returnDetailsItem(gas, gas, <GasIcon width={20} height={20} />)}
          {returnDetailsItem(
            water,
            water,
            <WaterIcon width={20} height={20} />
          )}
        </DetailsList>
      </DetailsItemsWrap>

      <VehicleDetailsWrap>
        <h3>Vehicle details</h3>
        <hr />
        <VehicleDetailsList>
          <li className="capitalize">
            <p>Form</p>
            <p>
              {form === "alcove"
                ? form
                : `${form.slice(0, 5)} ${form.slice(5)}`}
            </p>
          </li>

          <li>
            <p>Length</p>
            <p>{length}</p>
          </li>

          <li>
            <p>Width</p>
            <p>{width}</p>
          </li>

          <li>
            <p>Height</p>
            <p>{height}</p>
          </li>

          <li>
            <p>Tank</p>
            <p>{tank}</p>
          </li>

          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </VehicleDetailsList>
      </VehicleDetailsWrap>
    </FeatureReviewsWrap>
  );
};

export default Features;