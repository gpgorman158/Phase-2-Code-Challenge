import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([])
  const [myBots, setMyBots] = useState([])
  
  useEffect(()=> {
    fetch('http://localhost:8002/bots')
    .then(resp => resp.json())
    .then(json => setBots(json))
  }, [])

  function onBotClick (botToAdd){
    const findOne = myBots.find(myBot => myBot.id === botToAdd.id)
    if (!findOne){
      setMyBots([...myBots, botToAdd])
    }
  }
  function onMyBotClick (myBotToRemove){ 
    const myBotsPostRemove = myBots.filter(myBot => myBot.id !== myBotToRemove.id)
    setMyBots(myBotsPostRemove)
  }
  function onBotDelete (botToDelete){
    fetch(`http://localhost:8002/bots/${botToDelete.id}`,{
      method: "DELETE"
    })
    setBots(bots.filter(bot => bot.id !== botToDelete.id))
    setMyBots(myBots.filter(myBot => myBot.id !== botToDelete.id))
  }

  return (
    <div>
      <YourBotArmy bots={myBots} onBotDelete={onBotDelete} onBotClick={onMyBotClick}/>
      <BotCollection onBotDelete={onBotDelete} onBotClick={onBotClick} bots={bots}/>
    </div>
  )
}

export default BotsPage;
