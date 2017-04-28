function btn_ok() {
            var cn = $('#txt_cn').val(), sim = $('#txt_sim').val(), city = $('#txt_city').val();
            if(sim.length < 8) {showTips("手机号输入不合法");return;}
			if(cn.length < 2) {showTips("请填写有效的姓名");return;}
			showSubmit();
			$.ajax({ url: '../wxjs/wx.ashx?K=invest&CN=' + cn + '&C=' + city + '&IT=' + itype + '&S=' + sim + '&=rnd=' + Math.random(), type: 'post', dataType: 'json'
			    , success: function(data) { if (data.R == 1) { window.location = "MyCenter.aspx"; } else { showTips(data.data); } }
			    , error: function(request, status, error) { showTips(status); }
			});
        }