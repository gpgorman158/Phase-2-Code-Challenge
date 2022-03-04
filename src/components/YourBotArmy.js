import React from "react";
import BotCard from './BotCard.js'

function YourBotArmy({bots, onBotClick, onBotDelete}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            bots.map(bot => <BotCard onBotDelete={onBotDelete} onBotClick={onBotClick} bot={bot}/> )
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
