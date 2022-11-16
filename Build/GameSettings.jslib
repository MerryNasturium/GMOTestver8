//ゲーム開始時コールバック
function CallBackStart(UnityMessage)
{
	var callback_start =function() 
	{
	    UnityMessage;
	}
	console.log("ONON");
	game_start(callback_start);
}

//ゲーム終了時コールバック
function CallBackEnd(UnityMessage,game_score)
{
	var callback_end = function()
	{
		UnityMessage;
	}
	console.log(game_score);
	game_end({callback: callback_end, score: game_score});
}

//ゲームリワード広告視聴完了
function CallBackShowReward(UnityMessage)
{
	var reward_success_callback = function()
	{
		UnityMessage;
	}
	show_reward_ad(reward_success_callback);
}

//ゲームリワード広告視聴不完了
function CallBackFailShowReward(UnityMessage)
{
	var reward_fail_callback = function()
	{
		UnityMessage;
	}
	show_reward_ad({reward_fail_callback:'fail_func'});
}

//データ同期
function CallBackSave(UnityMessage,game_total_score)
{
	var callback_save =function( )
	{
		console.log("ONON");
		UnityMessage;
	}
	var data = JSON.stringify({total_score: game_total_score});
	game_save({callback: callback_save, data: data});
}
