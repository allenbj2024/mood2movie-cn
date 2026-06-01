const moods = [
  ["cheerful", "开心", "能量回来了", "✦", "#d99b4f"],
  ["reflective", "回望", "想把时间捋顺", "⌁", "#8d9ac7"],
  ["gloomy", "低落", "心里有点阴天", "☁", "#667284"],
  ["humorous", "想笑", "需要轻轻松松", "☺", "#d5b548"],
  ["melancholy", "惆怅", "漂亮地难过一会儿", "◐", "#9b7aa5"],
  ["idyllic", "田园", "想慢下来", "☼", "#8baa6d"],
  ["chill", "放松", "脑子先下班", "≈", "#74a6a6"],
  ["romantic", "浪漫", "心动还有回声", "♡", "#cb6e87"],
  ["weird", "怪一点", "不想按常理来", "◇", "#8f74c8"],
  ["horny", "荷尔蒙", "暧昧、身体、凝视", "◈", "#bd6f61"],
  ["sleepy", "困了", "别让眼皮赢", "↯", "#7a6eb0"],
  ["angry", "愤怒", "需要一口硬气", "!", "#b64f50"],
  ["fearful", "害怕", "想被吓得清醒", "◑", "#57706a"],
  ["lonely", "孤独", "一个人也有光", "·", "#68809c"],
  ["tense", "紧张", "手心有汗", "▣", "#b08452"],
  ["thoughtful", "思考", "想多看一层", "?", "#6c8eb6"],
  ["thrill-seeking", "寻刺激", "想把心率拉高", "⚡", "#c45a47"],
  ["playful", "顽皮", "想要一点轻快胡闹", "☆", "#d6a54f"],
].map(([id, label, line, glyph, color]) => ({ id, label, line, glyph, color }));

const fallbackMovieData = {
  cheerful: [
    movie("3idiots", "三傻大闹宝莱坞", "3 Idiots", 2009, "印度", "170 分钟", 9.2, ["喜剧", "青春", "励志"], "笑声很密，但不是空心的热闹。它会把你从焦虑里拽出来，再轻轻提醒你：别把人生交给排名。", "三个工程学院好友用莽撞、真诚和反叛，拆开成功学的硬壳。看完之后，开心里会多一点勇气。", "#e0a249"),
    movie("intouchables", "触不可及", "Intouchables", 2011, "法国", "112 分钟", 9.3, ["喜剧", "友情", "治愈"], "它的快乐带着尊严，不需要假装世界没坏过。两个完全不同的人互相照亮，适合把心情扶正。", "富翁与护工之间的友情，从冲撞开始，逐渐长成一种松弛、好笑又扎实的陪伴。", "#5ea0a5"),
    movie("littlemiss", "阳光小美女", "Little Miss Sunshine", 2006, "美国", "101 分钟", 8.3, ["公路", "家庭", "黑色幽默"], "这是一种歪歪扭扭的开心：全家人都不完美，却一起往前开。很适合给坏日子一个荒诞的出口。", "一家人开着旧车横穿美国，送小女孩去选美。一路失控，一路也把彼此找回来。", "#d28f3e"),
    movie("soul", "心灵奇旅", "Soul", 2020, "美国", "100 分钟", 8.7, ["动画", "奇幻", "人生"], "开心不一定来自大事件，也可能来自披萨、风、街角音乐和一颗突然醒来的心。", "爵士乐老师在生死之间重新理解热爱与生活，轻巧地谈很大的问题。", "#5c9cb0"),
  ],
  reflective: [
    movie("departures", "入殓师", "Departures", 2008, "日本", "130 分钟", 8.9, ["剧情", "人生", "家庭"], "它适合回望，因为它把告别拍得庄重又温柔。很多没说出口的话，会在安静里浮上来。", "失业的大提琴手成为入殓师，在一场场送别里重新理解亲情、职业与尊严。", "#8b7b62"),
    movie("beforemidnight", "爱在午夜降临前", "Before Midnight", 2013, "美国 / 希腊", "109 分钟", 8.8, ["爱情", "对话", "人生"], "它不像童话，更像多年之后还愿意继续说真话的人。适合整理亲密关系里的甜和刺。", "杰西与赛琳走入婚姻深处，海边、晚餐和争吵都成了爱情的另一种证词。", "#b38359"),
    movie("pianist", "海上钢琴师", "The Legend of 1900", 1998, "意大利", "165 分钟", 9.3, ["音乐", "传奇", "孤独"], "如果你在想选择、边界和命运，它会给你一段像海一样宽的沉默。", "出生在船上的钢琴天才一生没有下船，他的音乐成为旁人记忆里的神话。", "#6f879b"),
    movie("wongkarwai", "花样年华", "In the Mood for Love", 2000, "中国香港", "98 分钟", 8.8, ["爱情", "时代", "留白"], "每个擦肩而过都像被时间裱起来。适合那些想回头看，却又不愿惊动旧事的夜晚。", "两个发现伴侣背叛的人，在克制与靠近之间走出一段没有说破的感情。", "#9d4f55"),
  ],
  gloomy: [
    movie("manchester", "海边的曼彻斯特", "Manchester by the Sea", 2016, "美国", "137 分钟", 8.6, ["剧情", "创伤", "家庭"], "低落时不一定需要被鼓励，有时需要被允许。它懂那种无法立刻好起来的重量。", "一个沉默男人回到故乡照顾侄子，旧日悲剧也随之重新打开。", "#5f7186"),
    movie("shoplifters", "小偷家族", "Shoplifters", 2018, "日本", "121 分钟", 8.7, ["家庭", "社会", "温情"], "它把贫穷、亲密和道德拍得不轻易下判断。阴天里，也有人把你往屋里拉。", "靠偷窃生活的一家人收留小女孩，临时家庭的温暖与裂缝一起浮现。", "#8a745b"),
    movie("father", "困在时间里的父亲", "The Father", 2020, "英国", "97 分钟", 8.6, ["剧情", "亲情", "记忆"], "它用空间和时间的错位，拍出失去掌控感的恐惧。适合把难过看清楚，而不是压下去。", "老人不断怀疑身边的人与事，女儿也在照护与自我之间被拉扯。", "#7a7180"),
    movie("bluevalentine", "蓝色情人节", "Blue Valentine", 2010, "美国", "112 分钟", 7.8, ["爱情", "婚姻", "现实"], "它不负责安慰，只负责诚实。情绪低时看，会像一次缓慢的排空。", "一段爱情在过去与现在之间交错，甜蜜与破碎被放在同一张桌上。", "#4f6f99"),
  ],
  humorous: [
    movie("crazy-stone", "疯狂的石头", "Crazy Stone", 2006, "中国大陆", "106 分钟", 8.6, ["喜剧", "犯罪", "方言"], "节奏、误会和方言梗一起起飞，笑点带着本土烟火气。", "一块翡翠引发多方争夺，保安、小偷和各路人马撞出连环乌龙。", "#c77a40"),
    movie("grandbudapest", "布达佩斯大饭店", "The Grand Budapest Hotel", 2014, "美国 / 德国", "99 分钟", 8.9, ["喜剧", "冒险", "美学"], "它像一只精准上弦的八音盒，荒唐、漂亮、礼貌地疯狂。", "传奇门房与门童卷入遗产、谋杀和逃亡，欧洲旧梦被拍成粉色喜剧。", "#c06f84"),
    movie("shutup", "你丫闭嘴！", "Tais-toi!", 2003, "法国", "85 分钟", 8.1, ["喜剧", "犯罪", "搭档"], "一个太能打，一个太能说，简单粗暴但很解压。", "冷面罪犯与话痨笨贼意外结伴越狱，荒唐搭档一路制造事故。", "#a66d45"),
    movie("hotandspicy", "热辣滚烫", "YOLO", 2024, "中国大陆", "129 分钟", 7.6, ["喜剧", "成长", "运动"], "笑里有一口重新开始的气。不是鸡血，是一个人终于愿意对自己认真。", "宅家多年的乐莹遇到拳击，生活从自我放弃慢慢转向自我重建。", "#c46255"),
  ],
  melancholy: [
    movie("chungking", "重庆森林", "Chungking Express", 1994, "中国香港", "102 分钟", 8.8, ["爱情", "都市", "迷离"], "它的惆怅不是哭出来的，是在便利店、罐头和深夜街灯里慢慢发亮。", "两个失恋警察与两个女子的故事，在香港夜色中互相擦肩。", "#3f8f95"),
    movie("loveletter", "情书", "Love Letter", 1995, "日本", "117 分钟", 8.9, ["爱情", "青春", "回忆"], "雪地、误投的信和同名的少年，让遗憾变得干净透明。", "一封寄往天国的信意外收到回信，旧日青春也被重新翻开。", "#8ca6b5"),
    movie("her", "她", "Her", 2013, "美国", "126 分钟", 8.4, ["爱情", "科幻", "孤独"], "它很温柔，也很空旷。适合那些说不清想念谁，只是想被理解的晚上。", "孤独的写信员爱上人工智能系统，在亲密与失去之间学习告别。", "#c17365"),
    movie("bouquet", "花束般的恋爱", "We Made a Beautiful Bouquet", 2021, "日本", "124 分钟", 8.6, ["爱情", "现实", "青春"], "它把相爱的人如何被生活慢慢推远拍得很细。惆怅但不廉价。", "因错过末班车相识的恋人，从高度契合走向不同的人生节奏。", "#c48d8b"),
  ],
  idyllic: [
    movie("littleforest", "小森林 夏秋篇", "Little Forest: Summer/Autumn", 2014, "日本", "111 分钟", 9.0, ["田园", "美食", "治愈"], "每一道菜、每次劳作都在替焦虑降噪。适合把日子重新过慢。", "市子回到东北乡村自给自足，在四季料理中与自己和解。", "#83a35c"),
    movie("ourseas", "海街日记", "Our Little Sister", 2015, "日本", "128 分钟", 8.8, ["家庭", "日常", "治愈"], "它像一阵穿过老房子的风，轻，但能把心里的灰吹掉。", "三姐妹接纳同父异母的妹妹一起生活，家在细小日常里慢慢成形。", "#7fa68d"),
    movie("kikujiro", "菊次郎的夏天", "Kikujiro", 1999, "日本", "121 分钟", 8.9, ["公路", "童年", "夏天"], "它有任性的成年人，也有清亮的夏天。松弛得像午后的汽水。", "小男孩和不靠谱大叔踏上寻母之旅，一路遇见荒唐又温柔的人。", "#d2a047"),
    movie("under-tuscan", "托斯卡纳艳阳下", "Under the Tuscan Sun", 2003, "美国 / 意大利", "113 分钟", 8.1, ["旅行", "生活", "疗愈"], "阳光、房子和陌生地方，会让人相信生活还能重新装修。", "离婚后的作家来到托斯卡纳买下旧宅，在修复房子的同时修复自己。", "#c69252"),
  ],
  chill: [
    movie("waltermitty", "白日梦想家", "The Secret Life of Walter Mitty", 2013, "美国", "114 分钟", 8.6, ["冒险", "治愈", "旅行"], "它有开阔风景，也有轻巧幽默。适合从工作脑里抽离出来。", "普通照片管理员踏上寻找底片的旅程，现实比幻想更辽阔。", "#5e9aae"),
    movie("sideways", "杯酒人生", "Sideways", 2004, "美国", "127 分钟", 8.0, ["公路", "喜剧", "中年"], "酒、朋友和一点点失败感，调成了舒服的微醺。", "两个中年男人出发去加州酒乡旅行，笑话和人生问题一路发酵。", "#9b7e4f"),
    movie("midnightdiner", "深夜食堂", "Midnight Diner", 2014, "日本", "119 分钟", 7.9, ["美食", "日常", "人情"], "不需要大起大落，只要一碗热饭和几句真话。", "深夜小饭馆迎来形形色色的客人，每道菜背后都有一段生活。", "#80664d"),
    movie("patterson", "帕特森", "Paterson", 2016, "美国", "118 分钟", 8.1, ["诗意", "日常", "生活"], "它几乎不催你，只陪你看重复生活里的细微光泽。", "公交司机帕特森每天写诗、工作、散步，在普通日子里保存自己的节奏。", "#6b8a85"),
  ],
  romantic: [
    movie("beforesunrise", "爱在黎明破晓前", "Before Sunrise", 1995, "美国 / 奥地利", "101 分钟", 8.8, ["爱情", "对话", "旅行"], "浪漫来自两个陌生人愿意认真听彼此说话。轻盈，但余味很长。", "美国青年与法国女孩在维也纳下车同行，一夜散步成为一生回忆。", "#b98159"),
    movie("abouttime", "时空恋旅人", "About Time", 2013, "英国", "123 分钟", 8.8, ["爱情", "家庭", "奇幻"], "它把浪漫放回日常：爱不是轰烈，是把同一天再认真过一遍。", "拥有时间旅行能力的年轻人，在爱情和亲情中学会珍惜普通一天。", "#c7836c"),
    movie("flipped", "怦然心动", "Flipped", 2010, "美国", "90 分钟", 9.1, ["青春", "爱情", "成长"], "干净、明亮、没有太多花招，像第一次心动那样笨拙又真诚。", "女孩与男孩从误解到靠近，两种视角拼出青春期的心动。", "#c8a153"),
    movie("nottinghill", "诺丁山", "Notting Hill", 1999, "英国", "124 分钟", 8.0, ["爱情", "喜剧", "明星"], "它满足一种温柔幻想：巨大的世界，也会在小书店里变得私人。", "普通书店老板遇见好莱坞明星，一段不对等的恋爱慢慢长出勇气。", "#bf776b"),
  ],
  weird: [
    movie("lobster", "龙虾", "The Lobster", 2015, "爱尔兰 / 希腊", "119 分钟", 7.6, ["黑色幽默", "荒诞", "爱情"], "如果你想看不正常的正常社会，它会精准地让你不舒服又想笑。", "单身者必须在限定时间内找到伴侣，否则会被变成动物。", "#747c72"),
    movie("everything", "瞬息全宇宙", "Everything Everywhere All at Once", 2022, "美国", "139 分钟", 7.6, ["奇幻", "家庭", "荒诞"], "它把脑洞开到最大，最后却落回一句很小的爱。怪，但真诚。", "洗衣店老板娘卷入多重宇宙危机，在混乱中重新理解家人。", "#9b6fd1"),
    movie("birdman", "鸟人", "Birdman", 2014, "美国", "119 分钟", 8.3, ["黑色幽默", "戏剧", "自我"], "一镜到底的焦躁、虚荣和幻觉，会把荒诞感推到耳边。", "过气超级英雄演员试图靠百老汇翻身，却被名声与自我不断纠缠。", "#7c6655"),
    movie("malkovich", "成为约翰·马尔科维奇", "Being John Malkovich", 1999, "美国", "113 分钟", 8.3, ["奇幻", "荒诞", "身份"], "它像一个脑袋里长出来的隧道，怪到尽头是对欲望的冷笑。", "木偶师发现通往演员约翰·马尔科维奇意识的入口，引发身份混乱。", "#8b6f9f"),
  ],
  "thrill-seeking": [
    movie("inception", "盗梦空间", "Inception", 2010, "美国 / 英国", "148 分钟", 9.4, ["科幻", "动作", "悬疑"], "它有足够的概念和动作密度，让注意力没有逃跑空间。", "造梦团队潜入目标潜意识植入想法，层层梦境同时崩塌。", "#596f86"),
    movie("madmax", "疯狂的麦克斯4：狂暴之路", "Mad Max: Fury Road", 2015, "澳大利亚 / 美国", "120 分钟", 8.7, ["动作", "废土", "追逐"], "几乎从头冲到尾，画面像燃烧的金属。适合把沉闷直接撞碎。", "废土世界里，弗瑞奥萨带着女性囚徒逃离暴君，公路追杀一路狂飙。", "#d07841"),
    movie("johnwick", "疾速追杀", "John Wick", 2014, "美国", "101 分钟", 7.8, ["动作", "犯罪", "复仇"], "动作干净、节奏直接，像一杯不用解释的黑咖啡。", "退休杀手因爱犬被杀重出江湖，用精准暴力掀翻地下世界。", "#4f6a7b"),
    movie("topgun2", "壮志凌云2：独行侠", "Top Gun: Maverick", 2022, "美国", "130 分钟", 8.0, ["动作", "飞行", "热血"], "它把速度、老派英雄和大银幕爽感调得很准，心率会自动跟上。", "老飞行员回归训练年轻机师，执行一场几乎不可能完成的任务。", "#47779c"),
  ],
  horny: [
    movie("portrait", "燃烧女子的肖像", "Portrait of a Lady on Fire", 2019, "法国", "122 分钟", 8.7, ["爱情", "女性", "凝视"], "它的欲望不是喧哗，而是看与被看的每一次停顿。克制到发烫。", "女画家被委托为贵族小姐画像，两人在孤岛上靠近、相爱、告别。", "#b45552"),
    movie("callme", "请以你的名字呼唤我", "Call Me by Your Name", 2017, "意大利 / 美国", "132 分钟", 8.9, ["爱情", "夏天", "成长"], "夏日、果香、泳池和欲言又止，像一场被阳光晒热的初恋。", "少年艾利欧在意大利夏天遇见研究生奥利弗，短暂相爱却改变一生。", "#c48d4e"),
    movie("happy-together", "春光乍泄", "Happy Together", 1997, "中国香港", "96 分钟", 9.0, ["爱情", "漂泊", "欲望"], "它把亲密里的吸引、拉扯和耗损拍得漂亮又痛。", "两个香港男人在布宜诺斯艾利斯分合纠缠，爱与流浪都失去方向。", "#6f8b8a"),
    movie("lustcaution", "色，戒", "Lust, Caution", 2007, "中国大陆 / 美国", "158 分钟", 8.7, ["爱情", "谍战", "欲望"], "暧昧不是装饰，而是危险本身。适合想看情欲与权力互相试探。", "女学生潜伏接近特务头目，刺杀任务在情感与欲望中变得危险。", "#8f4c43"),
  ],
  angry: [
    movie("fightclub", "搏击俱乐部", "Fight Club", 1999, "美国", "139 分钟", 9.0, ["剧情", "反叛", "黑色"], "它把无处安放的愤怒拍成地下室里的拳头，也拍出这种愤怒的代价。", "失眠白领与魅力十足的泰勒创建地下搏击俱乐部，秩序逐渐失控。", "#7a5c52"),
    movie("whiplash", "爆裂鼓手", "Whiplash", 2014, "美国", "107 分钟", 8.7, ["音乐", "师徒", "强度"], "每一次鼓点都像顶着牙关往前冲。适合把火气变成专注。", "年轻鼓手在严苛导师逼迫下追求极限，天赋、尊严与伤害纠缠在一起。", "#b88a3e"),
    movie("parasite", "寄生虫", "Parasite", 2019, "韩国", "132 分钟", 8.8, ["黑色幽默", "阶层", "惊悚"], "它的愤怒先藏在笑里，最后突然露出刀锋。", "贫穷一家逐步进入富人家庭工作，阶层裂缝最终失控爆发。", "#6d775a"),
    movie("greatbuddha", "大佛普拉斯", "The Great Buddha+", 2017, "中国台湾", "102 分钟", 8.7, ["黑色幽默", "社会", "犯罪"], "荒诞、脏、冷，又很锋利。适合那些想看世界露出底色的时刻。", "夜班保安和拾荒好友偷看老板行车记录仪，意外窥见权力背后的黑暗。", "#807061"),
  ],
  fearful: [
    movie("getout", "逃出绝命镇", "Get Out", 2017, "美国", "104 分钟", 7.8, ["惊悚", "悬疑", "社会"], "恐惧来自礼貌表面下的控制感。越安静，越让人背后发冷。", "黑人青年拜访白人女友家庭，友善庄园逐渐显露诡异真相。", "#5b6f6b"),
    movie("conjuring", "招魂", "The Conjuring", 2013, "美国", "112 分钟", 8.0, ["恐怖", "超自然", "家庭"], "经典鬼屋节奏，吓点扎实，适合想要一次标准恐怖片体验。", "灵异调查夫妻帮助搬进农舍的一家人，对抗屋中恶灵。", "#4f5f5b"),
    movie("quietplace", "寂静之地", "A Quiet Place", 2018, "美国", "90 分钟", 6.3, ["惊悚", "怪物", "生存"], "它把声音变成危险本身，连呼吸都会变得紧张。", "怪物凭声音猎杀人类，一家人在无声世界里求生。", "#6e6655"),
    movie("hereditary", "遗传厄运", "Hereditary", 2018, "美国", "127 分钟", 7.3, ["恐怖", "家庭", "心理"], "不是跳吓，而是慢慢渗进来的不祥。看完会觉得房间角落都不太对。", "母亲去世后，一家人被血脉与秘密拖入越来越可怕的命运。", "#6b5355"),
  ],
  lonely: [
    movie("losttranslation", "迷失东京", "Lost in Translation", 2003, "美国 / 日本", "102 分钟", 8.2, ["孤独", "都市", "暧昧"], "孤独不是空白，而是两个陌生人短暂听懂了彼此。", "中年演员和年轻女子在东京酒店相遇，分享无法归类的亲密。", "#7b8a9a"),
    movie("taxidriver", "出租车司机", "Taxi Driver", 1976, "美国", "114 分钟", 8.6, ["犯罪", "孤独", "心理"], "它把城市孤独拍得脏而尖锐，适合看见失控之前的裂缝。", "越战退伍军人在纽约夜间开出租，厌世与幻想逐渐吞没他。", "#7f584e"),
    movie("perfectdays", "完美的日子", "Perfect Days", 2023, "日本 / 德国", "124 分钟", 8.5, ["日常", "孤独", "生活"], "一个人的生活也可以有秩序、音乐和树影。孤独在这里不是失败。", "东京清洁工平山每天工作、听磁带、读书，在重复里守住细小幸福。", "#7e966f"),
    movie("nomadland", "无依之地", "Nomadland", 2020, "美国", "108 分钟", 8.1, ["公路", "孤独", "生活"], "它的孤独很开阔，像夜里停在荒野边的一盏车灯。", "失去丈夫和家园的女人开车上路，在流动生活中寻找新的归属。", "#7b796f"),
  ],
  tense: [
    movie("12angry", "十二怒汉", "12 Angry Men", 1957, "美国", "96 分钟", 9.4, ["法庭", "推理", "群像"], "一个房间、十二个人、不断收紧的判断。紧张感完全来自语言和逻辑。", "陪审团审议少年谋杀案，一名陪审员坚持重看每个疑点。", "#8f805f"),
    movie("incendies", "焦土之城", "Incendies", 2010, "加拿大", "131 分钟", 8.6, ["悬疑", "战争", "家庭"], "它像一封越读越沉的遗书，谜底落下时几乎让人失语。", "双胞胎按照母亲遗愿寻找父亲和兄长，逐步揭开战争中的家族真相。", "#a0664d"),
    movie("witness", "控方证人", "Witness for the Prosecution", 1957, "美国", "116 分钟", 9.6, ["悬疑", "法庭", "反转"], "台词像刀，反转像机关。很适合想被剧情牵着走的夜晚。", "律师为谋杀案嫌疑人辩护，证人与真相不断改变庭审方向。", "#776f65"),
    movie("dialm", "电话谋杀案", "Dial M for Murder", 1954, "美国", "105 分钟", 8.9, ["犯罪", "悬疑", "希区柯克"], "它把谋杀计划拆得精密，越是优雅越让人绷紧。", "丈夫设计谋杀妻子骗取保险，计划却因一个细节出现裂口。", "#955c4d"),
  ],
  thoughtful: [
    movie("arrival", "降临", "Arrival", 2016, "美国", "116 分钟", 7.8, ["科幻", "语言", "命运"], "它让你思考语言如何改变时间，也思考明知结局仍要不要选择爱。", "语言学家尝试与外星访客沟通，逐渐理解一种非线性的时间观。", "#6d7d86"),
    movie("bladerunner2049", "银翼杀手2049", "Blade Runner 2049", 2017, "美国 / 英国", "164 分钟", 8.3, ["科幻", "赛博朋克", "身份"], "它冷、慢、壮观，像在废墟里追问灵魂到底是什么。", "复制人警探发现足以颠覆世界秩序的秘密，开始寻找自己的来源。", "#b2784e"),
    movie("truman", "楚门的世界", "The Truman Show", 1998, "美国", "103 分钟", 9.4, ["寓言", "人生", "媒体"], "它轻快地问一个很大的问题：如果你的世界是假的，你还敢走出去吗。", "楚门发现自己的人生可能是一场真人秀，开始寻找真实边界。", "#6799b3"),
    movie("manfromearth", "这个男人来自地球", "The Man from Earth", 2007, "美国", "87 分钟", 8.5, ["科幻", "哲学", "对话"], "几乎只有一间屋子和一群人说话，却能把想象力推得很远。", "教授在离职聚会上声称自己活了一万多年，朋友们被迫重新审视信仰与历史。", "#7d6a92"),
  ],
  playful: [
    movie("amelie", "天使爱美丽", "Amelie", 2001, "法国 / 德国", "122 分钟", 8.7, ["喜剧", "爱情", "奇想"], "它像偷偷往生活里塞一颗糖：小恶作剧、小善意、小心动，都带着轻盈的顽皮。", "害羞的艾米莉在巴黎悄悄改变身边人的生活，也慢慢学会走向自己的爱情。", "#b55f5f"),
    movie("paddington2", "帕丁顿熊2", "Paddington 2", 2017, "英国", "103 分钟", 8.1, ["喜剧", "家庭", "冒险"], "它可爱但不幼稚，像一块认真烤好的橘子果酱面包，适合让心情变软。", "帕丁顿为了给露西婶婶买礼物努力打工，却被卷入一场偷书案。", "#c17f49"),
    movie("legomovie", "乐高大电影", "The Lego Movie", 2014, "美国", "100 分钟", 7.9, ["动画", "冒险", "喜剧"], "脑洞很吵，但吵得有秩序。想要一点胡闹和创造力时，它特别合适。", "普通乐高小人被误认为预言中的英雄，和伙伴们一起对抗试图封死世界的反派。", "#d2ad43"),
    movie("singinginrain", "雨中曲", "Singin' in the Rain", 1952, "美国", "103 分钟", 9.0, ["歌舞", "喜剧", "经典"], "它的快乐会走路、会跳舞、会在雨里转圈。顽皮得很老派，也很有效。", "有声电影时代来临，默片明星和幕后女孩在混乱转型中唱跳出新未来。", "#5f99aa"),
  ],
  sleepy: [
    movie("taken", "飓风营救", "Taken", 2008, "法国 / 美国", "90 分钟", 8.3, ["动作", "营救", "爽片"], "短、狠、快，适合把困意直接踢出房间。", "前特工女儿被绑架，他跨国追踪，用极高效率展开营救。", "#5d748c"),
    movie("mission4", "碟中谍4：幽灵协议", "Mission: Impossible - Ghost Protocol", 2011, "美国", "132 分钟", 8.4, ["动作", "特工", "冒险"], "迪拜高塔那段足够让眼皮自觉上岗。", "伊森团队被迫独立行动，阻止一场可能引发核战争的阴谋。", "#6c86a4"),
    movie("edge", "明日边缘", "Edge of Tomorrow", 2014, "美国", "113 分钟", 8.2, ["科幻", "动作", "时间循环"], "重复死亡、不断升级，节奏像游戏闯关，困了也会被拉回来。", "毫无经验的军官陷入时间循环，在一次次失败中学会对抗外星入侵。", "#6e8290"),
    movie("raid", "突袭", "The Raid", 2011, "印度尼西亚", "101 分钟", 7.8, ["动作", "犯罪", "格斗"], "近身格斗密度极高，没有太多喘息点。", "特警小队突入毒枭大楼，却被困在层层敌人与陷阱之中。", "#6f645c"),
  ],
};

// AI-generated movie cache: moodId -> movie[]
const aiMovieCache = {};

const state = {
  moodId: null,
  index: 0,
  favorites: loadFavorites(),
  search: "",
  aiLoading: false,
};

const elements = {
  homeView: document.querySelector("#homeView"),
  recommendationView: document.querySelector("#recommendationView"),
  moodGrid: document.querySelector("#moodGrid"),
  moodIndicator: document.querySelector("#moodIndicator"),
  posterCard: document.querySelector("#posterCard"),
  posterMood: document.querySelector("#posterMood"),
  posterTitle: document.querySelector("#posterTitle"),
  posterYear: document.querySelector("#posterYear"),
  movieRank: document.querySelector("#movieRank"),
  movieTitle: document.querySelector("#movieTitle"),
  movieOriginal: document.querySelector("#movieOriginal"),
  movieMeta: document.querySelector("#movieMeta"),
  movieCredits: document.querySelector("#movieCredits"),
  genreRow: document.querySelector("#genreRow"),
  movieReason: document.querySelector("#movieReason"),
  movieSynopsis: document.querySelector("#movieSynopsis"),
  trailerLink: document.querySelector("#trailerLink"),
  doubanLink: document.querySelector("#doubanLink"),
  saveMovie: document.querySelector("#saveMovie"),
  saveIcon: document.querySelector("#saveIcon"),
  queueList: document.querySelector("#queueList"),
  movieSearch: document.querySelector("#movieSearch"),
  favoriteToggle: document.querySelector("#favoriteToggle"),
  favoriteCount: document.querySelector("#favoriteCount"),
  favoriteDrawer: document.querySelector("#favoriteDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  favoriteList: document.querySelector("#favoriteList"),
  toast: document.querySelector("#toast"),
  aiStatus: document.querySelector("#aiStatus"),
  settingsBtn: document.querySelector("#settingsBtn"),
  settingsModal: document.querySelector("#settingsModal"),
  settingsClose: document.querySelector("#settingsClose"),
  settingsOverlay: document.querySelector("#settingsOverlay"),
  apiKeyInput: document.querySelector("#apiKeyInput"),
  movieCountInput: document.querySelector("#movieCountInput"),
  movieCountDisplay: document.querySelector("#movieCountDisplay"),
  saveSettings: document.querySelector("#saveSettings"),
  refreshAI: document.querySelector("#refreshAI"),
  loadingOverlay: document.querySelector("#loadingOverlay"),
};

init();

function init() {
  renderMoodGrid();
  bindEvents();
  syncFromRoute();
  renderFavorites();
  updateAIStatus();
}

function movie(id, title, original, year, country, runtime, rating, genres, reason, synopsis, accent) {
  return { id, title, original, year, country, runtime, rating, genres, reason, synopsis, accent };
}

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem("mood2movie:settings") || "{}");
  } catch {
    return {};
  }
}

function saveSettings(settings) {
  localStorage.setItem("mood2movie:settings", JSON.stringify(settings));
}

function getApiKey() {
  // Server-configured key takes priority over user's browser setting
  if (window.DEEPSEEK_API_KEY && window.DEEPSEEK_API_KEY !== 'sk-your-key-here') {
    return window.DEEPSEEK_API_KEY;
  }
  return loadSettings().apiKey || "";
}

function getMovieCount() {
  if (window.DEEPSEEK_MOVIE_COUNT) {
    return parseInt(window.DEEPSEEK_MOVIE_COUNT, 10);
  }
  return parseInt(loadSettings().movieCount || "10", 10);
}

function getTmdbKey() {
  if (window.TMDB_API_KEY && window.TMDB_API_KEY !== "your-tmdb-key-here") {
    return window.TMDB_API_KEY;
  }
  return "";
}

// poster URL cache: `${title}:${year}` -> url | "" (miss)
const posterCache = {};

async function fetchPoster(film) {
  const key = getTmdbKey();
  if (!key) return "";
  const cacheKey = `${film.title}:${film.year}`;
  if (cacheKey in posterCache) return posterCache[cacheKey];

  const queries = [film.original, film.title].filter(Boolean);
  for (const q of queries) {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${encodeURIComponent(key)}&language=zh-CN&include_adult=true&query=${encodeURIComponent(q)}${film.year ? `&year=${film.year}` : ""}`;
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      const hit = (data.results || []).find((r) => r.poster_path) || {};
      if (hit.poster_path) {
        const posterUrl = `https://image.tmdb.org/t/p/w500${hit.poster_path}`;
        posterCache[cacheKey] = posterUrl;
        return posterUrl;
      }
    } catch {
      // try next query
    }
  }
  posterCache[cacheKey] = "";
  return "";
}

function applyPoster(film) {
  if (!getTmdbKey()) return;
  fetchPoster(film).then((url) => {
    // Only apply if still showing this film
    if (getCurrentMovie() !== film) return;
    if (url) {
      elements.posterCard.style.backgroundImage = `url("${url}")`;
      elements.posterCard.classList.add("has-image");
    } else {
      elements.posterCard.style.backgroundImage = "";
      elements.posterCard.classList.remove("has-image");
    }
  });
}

function isServerConfigured() {
  return window.DEEPSEEK_API_KEY && window.DEEPSEEK_API_KEY !== 'sk-your-key-here';
}

function updateAIStatus() {
  const key = getApiKey();
  if (elements.aiStatus) {
    if (key) {
      elements.aiStatus.textContent = "✦ AI 推荐已开启";
      elements.aiStatus.classList.add("is-active");
    } else {
      elements.aiStatus.textContent = "AI 推荐未配置";
      elements.aiStatus.classList.remove("is-active");
    }
  }
  // Hide settings button when server has configured the key
  if (elements.settingsBtn) {
    elements.settingsBtn.style.display = isServerConfigured() ? "none" : "";
  }
}

function bindEvents() {
  document.querySelector("#randomMood").addEventListener("click", () => {
    const random = moods[Math.floor(Math.random() * moods.length)];
    goToMood(random.id, true);
  });

  document.querySelector("#backHome").addEventListener("click", () => {
    state.moodId = null;
    state.index = 0;
    history.pushState(null, "", pageBase());
    render();
  });

  document.querySelector("#prevMovie").addEventListener("click", () => stepMovie(-1));
  document.querySelector("#nextMovie").addEventListener("click", () => stepMovie(1));
  document.querySelector("#shuffleMovie").addEventListener("click", shuffleMovie);
  document.querySelector("#copyList").addEventListener("click", copyCurrentList);
  document.querySelector("#shareMood").addEventListener("click", copyCurrentLink);
  elements.saveMovie.addEventListener("click", toggleCurrentFavorite);
  elements.movieSearch.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderQueue();
  });

  elements.favoriteToggle.addEventListener("click", openDrawer);
  document.querySelector("#closeDrawer").addEventListener("click", closeDrawer);
  elements.drawerBackdrop.addEventListener("click", closeDrawer);
  document.querySelector("#copyFavorites").addEventListener("click", copyFavorites);

  // Settings
  elements.settingsBtn.addEventListener("click", openSettings);
  elements.settingsClose.addEventListener("click", closeSettings);
  elements.settingsOverlay.addEventListener("click", closeSettings);
  elements.saveSettings.addEventListener("click", applySettings);

  elements.movieCountInput.addEventListener("input", () => {
    elements.movieCountDisplay.textContent = elements.movieCountInput.value;
  });

  // Refresh AI recommendations
  elements.refreshAI.addEventListener("click", () => {
    if (!getApiKey()) {
      openSettings();
      return;
    }
    if (state.moodId) {
      delete aiMovieCache[state.moodId];
      fetchAIRecommendations(state.moodId);
    }
  });

  window.addEventListener("popstate", syncFromRoute);
  window.addEventListener("hashchange", syncFromRoute);
}

function openSettings() {
  const settings = loadSettings();
  elements.apiKeyInput.value = settings.apiKey || "";
  const count = parseInt(settings.movieCount || "10", 10);
  elements.movieCountInput.value = count;
  elements.movieCountDisplay.textContent = count;
  elements.settingsModal.classList.remove("is-hidden");
  elements.settingsOverlay.classList.remove("is-hidden");
  elements.apiKeyInput.focus();
}

function closeSettings() {
  elements.settingsModal.classList.add("is-hidden");
  elements.settingsOverlay.classList.add("is-hidden");
}

function applySettings() {
  const settings = {
    apiKey: elements.apiKeyInput.value.trim(),
    movieCount: elements.movieCountInput.value,
  };
  saveSettings(settings);
  closeSettings();
  updateAIStatus();
  // Clear cache so new settings take effect
  Object.keys(aiMovieCache).forEach((key) => delete aiMovieCache[key]);
  if (state.moodId && settings.apiKey) {
    fetchAIRecommendations(state.moodId);
  }
  showToast("设置已保存");
}

async function fetchAIRecommendations(moodId) {
  const apiKey = getApiKey();
  if (!apiKey) return;

  const mood = moods.find((m) => m.id === moodId);
  if (!mood) return;

  const count = getMovieCount();
  state.aiLoading = true;
  showLoadingOverlay(true);

  const prompt = `你是一位资深电影策展人，精通全球电影。
请根据心情"${mood.label}"（${mood.line}），推荐 ${count} 部适合这种情绪的电影。
要求：
- 涵盖不同年代、不同国家，尽量多样
- 包含经典佳作和近年好片
- 每部电影提供真实准确的信息

请严格按照以下 JSON 数组格式返回，不要有任何多余文字：
[
  {
    "id": "英文小写id无空格",
    "title": "中文译名",
    "original": "原版片名（英文或原语言）",
    "year": 上映年份数字,
    "country": "出品国家/地区",
    "runtime": "时长 分钟",
    "rating": 豆瓣或IMDb评分数字,
    "director": "导演姓名（中文译名）",
    "cast": ["主演1", "主演2", "主演3"],
    "genres": ["类型1", "类型2", "类型3"],
    "reason": "一句话说明为什么这部电影适合${mood.label}的心情（40字以内，有温度有洞察）",
    "synopsis": "一句话电影气味/氛围描述（40字以内，诗意感性）",
    "accent": "十六进制颜色代码，体现电影整体色调，如#8b7b62"
  }
]`;

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.9,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    const jsonMatch = content.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error("响应格式异常");

    const films = JSON.parse(jsonMatch[0]);
    if (!Array.isArray(films) || films.length === 0) throw new Error("电影列表为空");

    const normalized = films.map((f) => ({
      id: String(f.id || Math.random().toString(36).slice(2)),
      title: String(f.title || "未知"),
      original: String(f.original || ""),
      year: parseInt(f.year, 10) || 2000,
      country: String(f.country || ""),
      runtime: String(f.runtime || ""),
      rating: parseFloat(f.rating) || 0,
      director: String(f.director || ""),
      cast: Array.isArray(f.cast) ? f.cast.map(String) : [],
      genres: Array.isArray(f.genres) ? f.genres.map(String) : [],
      reason: String(f.reason || ""),
      synopsis: String(f.synopsis || ""),
      accent: /^#[0-9a-fA-F]{6}$/.test(f.accent) ? f.accent : "#8b7b62",
    }));

    aiMovieCache[moodId] = normalized;

    if (state.moodId === moodId) {
      state.index = 0;
      renderMovie();
      renderQueue();
      showToast(`✦ AI 已为你推荐 ${normalized.length} 部电影`);
    }
  } catch (err) {
    console.error("DeepSeek API error:", err);
    showToast(`AI 推荐失败：${err.message}`);
  } finally {
    state.aiLoading = false;
    showLoadingOverlay(false);
  }
}

function showLoadingOverlay(show) {
  elements.loadingOverlay.classList.toggle("is-hidden", !show);
}

function renderMoodGrid() {
  elements.moodGrid.innerHTML = "";
  moods.forEach((mood) => {
    const button = document.createElement("button");
    button.className = "mood-card";
    button.type = "button";
    button.style.setProperty("--tone", `linear-gradient(145deg, ${hexToRgba(mood.color, 0.34)}, rgba(255,255,255,0.04))`);
    button.innerHTML = `<span class="glyph" aria-hidden="true">${mood.glyph}</span><strong>${mood.label}</strong><span>${mood.line}</span>`;
    button.addEventListener("click", () => goToMood(mood.id, true));
    elements.moodGrid.appendChild(button);
  });
}

function syncFromRoute() {
  const routedMood = readMoodFromRoute();
  if (routedMood && (fallbackMovieData[routedMood] || moods.find((m) => m.id === routedMood))) {
    state.moodId = routedMood;
    state.index = clampIndex(state.index, getCurrentList().length);
  } else {
    state.moodId = null;
    state.index = 0;
  }
  render();
}

function readMoodFromRoute() {
  const hashMatch = location.hash.match(/#\/movies\/([a-z0-9-]+)/);
  if (hashMatch) return hashMatch[1];
  const pathMatch = location.pathname.match(/\/movies\/([a-z0-9-]+)/);
  if (pathMatch) return pathMatch[1];
  const params = new URLSearchParams(location.search);
  return params.get("mood");
}

function goToMood(moodId, updateRoute = false) {
  state.moodId = moodId;
  state.index = 0;
  state.search = "";
  if (updateRoute) {
    location.hash = `/movies/${moodId}`;
  }
  render();

  // Fetch AI recommendations if API key is set and not cached
  if (getApiKey() && !aiMovieCache[moodId]) {
    fetchAIRecommendations(moodId);
  }
}

function render() {
  if (!state.moodId) {
    elements.homeView.classList.remove("is-hidden");
    elements.recommendationView.classList.add("is-hidden");
    document.title = "mood2movie 中文版｜心情电影推荐";
    return;
  }

  elements.homeView.classList.add("is-hidden");
  elements.recommendationView.classList.remove("is-hidden");
  elements.movieSearch.value = state.search;
  renderMovie();
  renderQueue();
}

function renderMovie() {
  const mood = getMood();
  const list = getCurrentList();
  if (!list.length) return;
  const film = list[state.index];
  const favorite = isFavorite(film);
  const isAI = !!aiMovieCache[state.moodId];

  document.title = `${mood.label}时看《${film.title}》｜mood2movie 中文版`;
  elements.moodIndicator.innerHTML = `${mood.glyph} ${mood.label}：${mood.line}${isAI ? ' <span class="ai-badge">✦ AI</span>' : ""}`;
  elements.posterCard.style.setProperty("--accent", film.accent);
  elements.posterMood.textContent = `mood2movie · ${mood.label}`;
  elements.posterTitle.textContent = film.title;
  elements.posterYear.textContent = `${film.year} · ${film.country}`;
  elements.movieRank.textContent = `${state.index + 1} / ${list.length}`;
  elements.movieTitle.textContent = film.title;
  elements.movieOriginal.textContent = film.original;

  // Reset poster image, then async-load real poster from TMDB
  elements.posterCard.style.backgroundImage = "";
  elements.posterCard.classList.remove("has-image");
  applyPoster(film);

  // Director & cast (credits)
  if (elements.movieCredits) {
    const parts = [];
    if (film.director) parts.push(`<span class="credit-line"><span class="credit-label">导演</span>${film.director}</span>`);
    if (film.cast && film.cast.length) parts.push(`<span class="credit-line"><span class="credit-label">主演</span>${film.cast.join(" / ")}</span>`);
    elements.movieCredits.innerHTML = parts.join("");
    elements.movieCredits.style.display = parts.length ? "" : "none";
  }
  elements.movieReason.textContent = film.reason;
  elements.movieSynopsis.textContent = film.synopsis;
  elements.trailerLink.href = trailerUrl(film);
  if (elements.doubanLink) elements.doubanLink.href = doubanUrl(film);

  // Poster and title click through to Douban movie page
  const douban = doubanUrl(film);
  elements.posterCard.style.cursor = "pointer";
  elements.posterCard.title = "在豆瓣查看《" + film.title + "》";
  elements.posterCard.onclick = () => window.open(douban, "_blank", "noreferrer");
  elements.movieTitle.style.cursor = "pointer";
  elements.movieTitle.title = "在豆瓣查看《" + film.title + "》";
  elements.movieTitle.onclick = () => window.open(douban, "_blank", "noreferrer");

  elements.saveMovie.classList.toggle("is-saved", favorite);
  elements.saveIcon.textContent = favorite ? "♥" : "♡";

  renderChips(elements.movieMeta, [
    `${film.year}`,
    film.country,
    film.runtime,
    film.rating ? `评分 ${film.rating}` : "",
  ].filter(Boolean), "meta-chip");
  renderChips(elements.genreRow, film.genres, "genre-chip");
  renderFavoriteCount();
}

function renderChips(container, items, className) {
  container.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = className;
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function renderQueue() {
  const list = getCurrentList();
  const query = state.search.toLowerCase();
  const filtered = list
    .map((film, index) => ({ film, index }))
    .filter(({ film }) => {
      if (!query) return true;
      return [film.title, film.original, film.country, film.synopsis, film.reason, ...film.genres]
        .join(" ")
        .toLowerCase()
        .includes(query);
    });

  elements.queueList.innerHTML = "";
  if (!filtered.length) {
    elements.queueList.innerHTML = `<div class="empty-state">这组片单里暂时没有匹配项。</div>`;
    return;
  }

  filtered.forEach(({ film, index }) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `queue-item${index === state.index ? " is-active" : ""}`;
    item.innerHTML = `
      <span class="mini-poster" style="--accent:${film.accent}">${film.year.toString().slice(2)}</span>
      <span><strong>${film.title}</strong><span>${film.genres.join(" · ")} · ${film.rating || ""}</span></span>
    `;
    item.addEventListener("click", () => {
      state.index = index;
      renderMovie();
      renderQueue();
    });
    elements.queueList.appendChild(item);
  });
}

function stepMovie(direction) {
  const list = getCurrentList();
  state.index = (state.index + direction + list.length) % list.length;
  renderMovie();
  renderQueue();
}

function shuffleMovie() {
  const list = getCurrentList();
  if (list.length < 2) return;
  let next = state.index;
  while (next === state.index) {
    next = Math.floor(Math.random() * list.length);
  }
  state.index = next;
  renderMovie();
  renderQueue();
}

function toggleCurrentFavorite() {
  const film = getCurrentMovie();
  const key = favoriteKey(film);
  const existing = state.favorites.findIndex((item) => item.key === key);
  if (existing >= 0) {
    state.favorites.splice(existing, 1);
    showToast("已取消收藏");
  } else {
    state.favorites.unshift({
      key,
      moodId: state.moodId,
      movieId: film.id,
      title: film.title,
      original: film.original,
      year: film.year,
      genres: film.genres,
      accent: film.accent,
    });
    showToast("已加入收藏");
  }
  saveFavorites();
  renderMovie();
  renderQueue();
  renderFavorites();
}

function renderFavorites() {
  renderFavoriteCount();
  elements.favoriteList.innerHTML = "";
  if (!state.favorites.length) {
    elements.favoriteList.innerHTML = `<div class="empty-state">收藏后的电影会出现在这里。</div>`;
    return;
  }

  state.favorites.forEach((item) => {
    const mood = moods.find((entry) => entry.id === item.moodId);
    const row = document.createElement("button");
    row.type = "button";
    row.className = "favorite-item";
    row.innerHTML = `
      <span class="mini-poster" style="--accent:${item.accent}">${item.year.toString().slice(2)}</span>
      <span><strong>${item.title}</strong><span>${mood?.label || "心情"} · ${item.genres.join(" · ")}</span></span>
    `;
    row.addEventListener("click", () => {
      closeDrawer();
      state.moodId = item.moodId;
      const list = getCurrentList();
      state.index = Math.max(0, list.findIndex((film) => film.id === item.movieId));
      location.hash = `/movies/${item.moodId}`;
      render();
    });
    elements.favoriteList.appendChild(row);
  });
}

function renderFavoriteCount() {
  elements.favoriteCount.textContent = state.favorites.length.toString();
}

function openDrawer() {
  elements.favoriteDrawer.classList.remove("is-hidden");
  elements.drawerBackdrop.classList.remove("is-hidden");
  renderFavorites();
}

function closeDrawer() {
  elements.favoriteDrawer.classList.add("is-hidden");
  elements.drawerBackdrop.classList.add("is-hidden");
}

function copyCurrentList() {
  const mood = getMood();
  const text = getCurrentList()
    .map((film, index) => `${index + 1}. 《${film.title}》${film.original ? ` / ${film.original}` : ""}（${film.year}）｜${film.genres.join("、")}｜${film.reason}`)
    .join("\n");
  copyText(`mood2movie 中文版 · ${mood.label}片单\n${text}`);
}

function copyFavorites() {
  if (!state.favorites.length) {
    showToast("还没有收藏电影");
    return;
  }
  const text = state.favorites
    .map((item, index) => `${index + 1}. 《${item.title}》 / ${item.original}（${item.year}）`)
    .join("\n");
  copyText(`我的 mood2movie 收藏\n${text}`);
}

function copyCurrentLink() {
  copyText(`${location.origin}${pageBase()}#/movies/${state.moodId}`);
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast("已复制到剪贴板")).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  showToast("已复制到剪贴板");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2100);
}

function getMood() {
  return moods.find((mood) => mood.id === state.moodId) || moods[0];
}

function getCurrentList() {
  if (state.moodId && aiMovieCache[state.moodId]) {
    return aiMovieCache[state.moodId];
  }
  return fallbackMovieData[state.moodId] || fallbackMovieData.cheerful;
}

function getCurrentMovie() {
  return getCurrentList()[state.index];
}

function favoriteKey(film) {
  return `${state.moodId}:${film.id}`;
}

function isFavorite(film) {
  return state.favorites.some((item) => item.key === favoriteKey(film));
}

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem("mood2movie:favorites") || "[]");
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem("mood2movie:favorites", JSON.stringify(state.favorites));
}

function trailerUrl(film) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${film.original || film.title} official trailer`)}`;
}

function doubanUrl(film) {
  return `https://search.douban.com/movie/subject_search?search_text=${encodeURIComponent(film.title)}`;
}

function pageBase() {
  const marker = "/movies/";
  if (location.pathname.includes(marker)) {
    return location.pathname.slice(0, location.pathname.indexOf(marker)) + "/";
  }
  return location.pathname.endsWith("/") ? location.pathname : location.pathname.replace(/[^/]*$/, "");
}

function clampIndex(index, length) {
  return Math.max(0, Math.min(index, length - 1));
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value = parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
