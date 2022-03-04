import React from "react";
import BotCard from './BotCard.js'

function BotCollection({bots, onBotClick, onBotDelete}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bots.map((bot) => <BotCard onBotClick={onBotClick} onBotDelete={onBotDelete} key={bot.id} bot={bot}/>)
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
