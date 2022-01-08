import React from "react";
import craftData from "../../json/data.json";
import itemData from "../../json/items.json";

const { cookingTables } = craftData;

let cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../../assets/img/", true, /\.png$/));

function Crafting(props) {
  let data = props.data;
  return (
    <div
      className={props.bootstrap}
      style={{
        width: "256px",
        height: "132px",
      }}
    >
      <img
        alt="Empty-crafting-table.png"
        src={cache["./Empty-crafting-table.png"].default}
        width="256"
        height="132"
      />
      <div
        style={{
          position: "relative",
          top: "-118px",
          left: "14px",
        }}
      >
        {data.keys.map((xa, ia) => {
          return (
            <div key={ia}>
              {xa.map((y, ib) => {
                let idData = findItemData(y);
                return (
                  <div
                    key={ib}
                    style={{
                      top: `${ia * 36}px`,
                      left: `${ib * 36}px`,
                      width: "32px",
                      height: "32px",
                      position: "absolute",
                    }}
                  >
                    <a href="#" title={idData.name}>
                      <img
                        alt={idData.name}
                        src={cache[`./minecraftitems/${y}.png`].default}
                        width="32"
                        height="32"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}

        <div
          style={{
            top: "36px",
            left: "188px",
            width: "32px",
            height: "32px",
            position: "absolute",
          }}
        >
          <a href="/wiki/Computer" title={data.itemName}>
            <img
              alt={data.itemName}
              src={cache[`./moditems/${data.result}.png`].default}
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Furnace(props) {
  let data = props.data;

  return (
    <div
      className={props.bootstrap}
      style={{
        width: "188px",
        height: "132px",
        top: "0px",
        left: "0px",
        position: "relative",
      }}
    >
      <img
        src={cache["./Empty-furnace.png"].default}
        alt="Empty-furnace.png"
        width={188}
        height={132}
      />
      <div style={{ top: "14px", left: "14px", position: "absolute" }}>
        <a href="#">
          <img
            src={cache[`./minecraftitems/${data.keys}.png`].default}
            alt={findItemData(data.keys)}
            width={32}
            height={32}
          />
        </a>
      </div>
      <div style={{ top: "50px", left: "134px", position: "absolute" }}>
        <a href="#">
          <img
            src={cache[`./moditems/${data.result}.png`].default}
            alt={data.itemName}
            width={32}
            height={32}
          />
        </a>
      </div>
      <div style={{ top: "86px", left: "14px", position: "absolute" }}>
        <a href="#">
          <img
            src={cache["./minecraftitems/263-0.png"].default}
            alt="Coal"
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  );
}

function findItemData(keys) {
  let key = keys.split("-");
  return itemData.filter((x) => x.type == key[0] && x.meta == key[1])[0];
}

function DisplayCrafting(props) {
  if (props.isFor == "other") {
    return props.useData.map((x, i) => {
      return (
        <div key={i} className="col-md-6 my-5">
          <h2
            className="text-center"
            style={{
              fontFamily: "'PT Sans', sans-serif",
              color: "#37474f",
            }}
          >
            {x.itemName}
          </h2>
          <div className="justify-content-center" style={{ width: "100%" }}>
            {x.type === "furnace" ? (
              <Furnace data={x} bootstrap="mx-auto crafting-breakpoint" />
            ) : (
              <Crafting data={x} bootstrap="mx-auto crafting-breakpoint" />
            )}
          </div>
        </div>
      );
    });
  } else if (props.isFor === "cooking-table") {
    return <Crafting data={cookingTables} bootstrap="mx-auto cooking-table-breakpoint" />;
  }
}

export default DisplayCrafting;
