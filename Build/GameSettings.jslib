//�Q�[���J�n���R�[���o�b�N
function CallBackStart(UnityMessage)
{
	var callback_start =function() 
	{
	    UnityMessage;
	}
	console.log("ONON");
	game_start(callback_start);
}

//�Q�[���I�����R�[���o�b�N
function CallBackEnd(UnityMessage,game_score)
{
	var callback_end = function()
	{
		UnityMessage;
	}
	console.log(game_score);
	game_end({callback: callback_end, score: game_score});
}

//�Q�[�������[�h�L����������
function CallBackShowReward(UnityMessage)
{
	var reward_success_callback = function()
	{
		UnityMessage;
	}
	show_reward_ad(reward_success_callback);
}

//�Q�[�������[�h�L�������s����
function CallBackFailShowReward(UnityMessage)
{
	var reward_fail_callback = function()
	{
		UnityMessage;
	}
	show_reward_ad({reward_fail_callback:'fail_func'});
}

//�f�[�^����
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
