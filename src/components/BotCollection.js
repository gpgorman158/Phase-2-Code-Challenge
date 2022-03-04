import React  from "react";
import BotCard from './BotCard.js'
import SortBar from './SortBar.js'

function BotCollection({bots, onBotClick, onBotDelete, onSort}) {
  
  return (
      <>
      <SortBar onSort={onSort}/>
      <div className="ui four column grid">
        <div className="row">
          {
            bots.map((bot) => <BotCard onBotClick={onBotClick} onBotDelete={onBotDelete} key={bot.id} bot={bot}/>)
          }
        </div>
      </div>
      </>
  );
}

export default BotCollection;
