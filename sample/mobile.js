var menuButton = $(".mobile-menu-button");
var menuButtonImg = $(".mobile-menu-button img");
var menuContent = $("#menu-content");

menuButton.click(function () {
    var isopen = menuButton.attr("isopen");
    if(isopen == "0") {
        menuButton.attr("isopen", "1");
        menuButtonImg.attr("src","https://www.blinkist.com/packs/static/dark-reader/components/mobile-menu-bar/images/mobile-menu-close-icon-976c28e771611d875890.svg");
        menuContent.show();
    } else if (isopen == "1") {
        menuButton.attr("isopen", "0");
        menuButtonImg.attr("src","https://www.blinkist.com/packs/static/dark-reader/components/mobile-menu-bar/images/mobile-menu-open-icon-54bb6c645fbf331e0098.svg");
        menuContent.hide();
    }
});

var textSize = $("#text-size");
var textSizeToggleSvg = $("#text-size-toggle");
var textSizeContent = $("#text-size-content");
var textSizeContentMenu = $("#text-size-content-menu");
var textSizeS = $("#text-size-s");
var textSizeM = $("#text-size-m");
var textSizeL = $("#text-size-l");
var readerContentText = $(".reader-content__text");

textSize.click(function () {
    var isclose = textSizeToggleSvg.hasClass("transform");
    if (isclose) {
        textSizeToggleSvg.removeClass("transform");
        textSizeToggleSvg.removeClass("rotate-180");
        textSizeContent.removeClass("opacity-0");
        textSizeContent.addClass("opacity-100");
        textSizeContentMenu.show();
    } else {
        textSizeToggleSvg.addClass("transform");
        textSizeToggleSvg.addClass("rotate-180");
        textSizeContent.removeClass("opacity-100");
        textSizeContent.addClass("opacity-0");
        textSizeContentMenu.hide();
    }
});

textSizeS.click(function () {
    textSizeS.removeClass("border-light-grey");
    textSizeS.addClass("border-green");
    textSizeM.addClass("border-light-grey");
    textSizeL.addClass("border-light-grey");
    readerContentText.addClass("text-r2");
    readerContentText.removeClass("text-r1");
    readerContentText.removeClass("text-r0");
});
textSizeM.click(function () {
    textSizeS.addClass("border-light-grey");
    textSizeM.removeClass("border-light-grey");
    textSizeM.addClass("border-green");
    textSizeL.addClass("border-light-grey");
    readerContentText.removeClass("text-r2");
    readerContentText.addClass("text-r1");
    readerContentText.removeClass("text-r0");
});
textSizeL.click(function () {
    textSizeS.addClass("border-light-grey");
    textSizeM.addClass("border-light-grey");
    textSizeL.removeClass("border-light-grey");
    textSizeL.addClass("border-green");
    readerContentText.removeClass("text-r2");
    readerContentText.removeClass("text-r1");
    readerContentText.addClass("text-r0");
});
data = {
    "title": "The Prophet",
    "subtitle": "Prose Poetry Fables on the Beauty of Life and the Human Condition",
    "image": {
        "default": {
            "src": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/470.jpg",
            "srcset": {
                "2x": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/640.jpg"
            }
        },
        "sources": [
            {
                "media": "xs",
                "src": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/470.jpg",
                "srcset": {
                    "2x": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/640.jpg"
                }
            },
            {
                "media": "s",
                "src": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/640.jpg",
                "srcset": {
                    "2x": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/1080.jpg"
                }
            },
            {
                "media": "m",
                "src": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/250.jpg",
                "srcset": {
                    "2x": "https://images.blinkist.io/images/books/649c3c5aab0a5f00089b21c4/1_1/470.jpg"
                }
            }
        ]
    },
    "chaptersLength": 8,
    "chapters": [
        {
            "id": "649c3c5bab0a5f00089b21c5",
            "order_no": 0,
            "action_title": "What’s in it for me? Penetrating truths about humankind.",
            "text": "<p>You might be wondering how a 100-year-old composition about life could still be meaningful in today’s ultra-modern world. Surely Kahlil Gibran’s pocketbook of spiritual guidance and advice can no longer be significant or relevant?</p>\n<p>The truth is, <em>The Prophet </em>isn’t just relevant – it’s groundbreaking. The work has never been out of print, and sales have actually increased each year. Because of its transformational power, it’s a popular eighteenth birthday present: a punchy, powerful, and beautiful brochure of wisdom at a key moment in one’s life.&nbsp;</p>\n<p>But just as it is timeless, it is also ageless. We can all grow and learn from the profound reflections it offers on love, marriage, childhood, pain, happiness, friendship, work, and death – insights that will be as important in the next 100 years as they were in the last.</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_0.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21c6",
            "order_no": 1,
            "action_title": "Love, marriage, and childhood",
            "text": "<p>After 12 years living in Orphalese, the prophet Almustafa is journeying back to “the isle of his birth.” As he waits for his ship to slip into the harbor, the city’s people gather at the dockside. One after another, residents approach and ask the prophet to speak on a different topic, realizing this is the last opportunity they’ll ever have to draw from his deep and beautiful wisdom. “Disclose us to ourselves,” one person pleads, “and tell us all that has been shown you of that which is between birth and death.”</p>\n<p>First, Almustafa speaks of love. To him, this is the most pivotal theme; it underlies almost all the other topics he discusses. Above all, he says, love depends on freedom. It must be given freely and expect nothing in return. Because of this, love in its purest form doesn’t seek to possess or ask to be possessed.</p>\n<p>Next, a resident asks the prophet to speak of marriage. This, he says, is the connection of two souls in love, for eternity. But, he warns, there must be space within this togetherness – room for two people to breath and grow. Remember: love is not possessive, and it is not bondage. The prophet tells married couples to “let the winds of the heavens dance between you,” and says that the oak tree and the cypress can’t grow in each other’s shadows.</p>\n<p>Then comes childhood. Like marriage, this is based on love which is nonpossessive. Almustafa reminds parents that their children are not their property –&nbsp;in fact, they are not even their children. Instead, they are sons and daughters whose souls belong to tomorrow. A parent is simply a guardian who’s showing them the way.</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_1.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21c7",
            "order_no": 2,
            "action_title": "Joy, sorrow, and pain",
            "text": "<p>Almustafa now turns to joy and sorrow. Rather than divide these emotions, the prophet counsels people to view them as intertwined and inseparable. No life can be without them, and they can’t be without each other. He says, “the deeper that sorrow carves into your being, the more joy you can contain.” In this way, knowing immense sadness helps you understand and experience true happiness.</p>\n<p>A resident of Orphalese then approaches and begs the sage to speak about pain. Pain comes, Almustafa says, from a “breaking of the shell.” This shell contained a spiritual truth which was hidden or ignored.&nbsp;</p>\n<p>In other words, pain is about growth. The shell’s fracture is painful, but it allows sunlight in to nourish the soul. It makes us more knowledgeable, more mature, and wiser. Because of this, pain should be accepted and experienced with composure. It’s a miracle of life –&nbsp;as breathtaking as joy.&nbsp;</p>\n<p>If you’re able to see pain in this way, the prophet says, you can “watch with serenity through the winters of your grief.”</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_2.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21c8",
            "order_no": 3,
            "action_title": "Houses and clothes",
            "text": "<p>Next, our oracle moves on to the subject of houses. He understands that dwellings and cities are necessary parts of human existence –&nbsp;but he appeals to the citizens of Orphalese not to lose a spiritual connection with the forests and meadows.&nbsp;</p>\n<p>Almustafa longs for a world where the valleys are our streets, and the rows of vineyards are our alleyways. He wishes that humans would “come with the fragrance of the earth in [our] garments” – and warns that we risk losing our spiritual relationship with the natural world.&nbsp;</p>\n<p>The gradual urbanization of humankind, he says, stemmed from our ancestors’ desire for safety, indulgences, and comfort. Then he reminds us of our soul, “which is boundless in [us], abides in the mansion of the sky, whose door is the morning mist, and whose windows are the songs and silences of night.”</p>\n<p>The prophet takes a similar view toward clothes. Yes, they are useful and protect us from the elements –&nbsp;and yes, they are a part of what distinguishes us as human beings. But clothes also conceal our beauty. We might seek freedom or privacy in them, but that’s an illusion – instead, they can be “a harness and a chain.”</p>\n<p>Almustafa beseeches us to “meet the sun and the wind with more of [our] skin” and less of our clothes. That’s how we can feel the very breath and hand of life.</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_3.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21c9",
            "order_no": 4,
            "action_title": "Laws, crime, and punishment",
            "text": "<p>Our spiritual guide is not a fan of laws –&nbsp;the human-made ones, anyway. Comparing the legal system to children building and breaking sandcastles, he says that we make and break laws on a whim.&nbsp;</p>\n<p>First, we should seek freedom from the laws we’ve created by ignoring them – obeying only the responsibility to harm no one and to love all living creatures. In doing so, we can find spiritual happiness.</p>\n<p>For Almustafa, such a responsibility is a <em>natural </em>law. It’s a universal moral truth that circles back to his first, foundational speech on love.</p>\n<p>The prophet draws out a brilliant comparison between human-made and natural laws in the world of music. He says that you can “muffle the drum, and you can loosen the strings of the lyre, but who shall command the skylark not to sing?” The skylark has no concerns for the petty laws of humans.</p>\n<p>At the same time, though, the prophet also has a lot to say on crime and punishment. Preaching a viewpoint of radical forgiveness, he tells the people of Orphalese that a criminal is still a person no different from any other.&nbsp;</p>\n<p>He compares a person who has committed a crime to a person stumbling on a path –&nbsp;it’s a warning to those following behind, and a source of shame for those ahead who didn’t remove the stumbling block.</p>\n<p>Finally, Almustafa says there can be no greater punishment – or remedy – than a person’s own regret for a crime. He asks, “How shall you punish those whose remorse is already greater than their misdeeds?”</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_4.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21ca",
            "order_no": 5,
            "action_title": "Reason and emotion",
            "text": "<p>The oracle goes on to speak about two things often set in opposition to each other: reason and emotion.&nbsp;</p>\n<p>Rather than seeing these things as eternally at war within our souls, we should learn to view them as being equally vital to what makes us human. In truth, they exist in harmony, each one completing the other.</p>\n<p>Almustafa compares reason to the rudder of a ship, and emotion to its sails. Without either of these things, the ship would be completely useless; it needs both, working together, to carry us across oceans. Like a sail, we should let our passion and emotion provide us with the energy to travel through life. At the same time, we should allow reason, like a rudder, to steer this energy to its proper destination.</p>\n<p>Using the example of welcoming two guests into your home, the prophet finishes this thought by saying, “Surely you would not honor one guest above the other; for he who is more mindful of one loses the love and the faith of both.”</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_5.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21cb",
            "order_no": 6,
            "action_title": "Friendship and talking",
            "text": "<p>We now arrive at some profound meditations on friendship. This is a critical subject for the prophet, because it refers back to his emphasis on love.</p>\n<p>For Almustafa, friendship is a spiritual connection of two hearts and souls. Friends nourish us by freely sharing love, joy, comfort, and peace, and by creating an atmosphere of trust where we can share ideas.</p>\n<p>He warns against giving friends your spare time, your “hours to kill.” Instead, he wants us to give them our “hours to live.” That’s because the true purpose of friendship is a mutual deepening of each other’s spirits. Almustafa says that friendship is rooted in love –&nbsp;not a net that seeks to catch or possess anything.</p>\n<p>He closes with this offering: “In the sweetness of your friendship let there be laughter, and the sharing of pleasures. For in the dew of little things the heart finds its morning and is refreshed.”</p>\n<p>Almustafa then transitions to the subject of talking. He declares that we tend to talk when we are not at peace with our thoughts, or when we’re trying to escape the loneliness in our hearts.&nbsp;</p>\n<p>What’s more, a lot of talking hinders us from thinking deeply and discovering our true selves. This is often a deliberate tactic –&nbsp;those who talk incessantly do so because they fear the things that silence, and the space for self-reflection, would reveal.&nbsp;</p>\n<p>Instead, the prophet says, “The spirit dwells in rhythmic silence.”</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_6.m4a",
            "quote": null
        },
        {
            "id": "649c3c5bab0a5f00089b21cc",
            "order_no": 7,
            "action_title": "Pleasure and beauty",
            "text": "<p>For a sage so in touch with the spiritual dimensions of life, who privileges silence and nature over talking and cities, it might be a surprise to learn that Almustafa encourages pleasure.</p>\n<p>Pleasure, he teaches, is one of the great gifts of life; we should look back on moments of pleasure with fondness, not regret. We shouldn’t deny ourselves pleasure because we’re concerned that we will harm our spiritual health – in fact, the opposite is true. If we deny ourselves pleasure, a desire builds up inside us, causing pressure and pain that look for an escape.</p>\n<p>Almustafa speaks of the bee and the flower. The bee gains pleasure by collecting the nectar of a flower – to it, a flower is a “fountain of life.” And the flower senses pleasure in giving its nectar to the bee, because this allows the flower to reproduce. For the flower, the bee is a “messenger of love.” Our prophet says that “the giving and the receiving of pleasure is a need and an ecstasy.”</p>\n<p>This leads him into a discussion of beauty. He teaches that beauty is subjective –&nbsp;that it differs for each person. What’s more, he says, the part of us that perceives beauty isn’t the eyes, nose, ears, or skin. It’s the soul.&nbsp;</p>\n<p>For Almustafa, pure beauty is what he calls “life, when life unveils its holy face.” What he’s talking about here is the infinite nature of life itself –&nbsp;of the soul that animates living creatures. When we see beauty, what we are truly seeing is the gift of life.</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_7.m4a",
            "quote": null
        },
        {
            "id": "649c3c5cab0a5f00089b21cd",
            "order_no": 8,
            "action_title": "Time and death",
            "text": "<p>To end, let’s explore two of Almustafa’s most eternal subjects: time and death.</p>\n<p>We humans, he says, have a strange obsession with measuring, dividing, and controlling time – but this distorts the reality of what time really is. The soul in us, the essence of life itself, is timeless. Since our soul is the most vital part of our being, we as a whole are timeless and eternal. And if we look deep enough, we can feel this eternity within us.</p>\n<p>Here, Almustafa returns to love and compares it to the eternity of time. Like the soul, he says, love is boundless and moves within the center of our being.</p>\n<p>Death is also like time –&nbsp;it’s a portal into the eternal, and should be embraced rather than shied away from. Just as joy and sorrow are inseparable, so are life and death. Just as we can’t separate the river from the sea, we can’t separate life from death.</p>\n<p>So, when facing death, we should not tremble from fear but from joy. In the words of the prophet, death frees our souls to “rise and expand and seek God unencumbered.”</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_8.m4a",
            "quote": null
        },
        {
            "id": "649c3c5cab0a5f00089b21ce",
            "order_no": 9,
            "action_title": "Final summary",
            "text": "<p>As you proceed on your own journey, just remember that things which seem in binary opposition to each other –&nbsp;like joy and sorrow or life and death –&nbsp;are actually beautifully and inseparably connected; you can’t have one without the other.</p>\n<p>Also, love pervades and underlies everything. It forms the foundation upon which anything meaningful in our world must be built on.</p>",
            "audio_url": "https://f005.foolsroom.com/file/blankas/bookdata/en/649c3c5aab0a5f00089b21c4/chapter_9.m4a",
            "quote": null
        }
    ]
}

chapter_data = []
keyIdeaHtml = ""
var chapterLength = data.chaptersLength;
for (let chapter_index=0; chapter_index<data.chapters.length; ++chapter_index) {
    chapter = data.chapters[chapter_index]
    if (chapter_index === 0) {
        keyIdeaHeadline = "Introduction";
        keyIdeaAudioHeadline = "Introduction";
        keyIdeaChapterHeadline = "Introduction";
        keyIdeaIndex = "";
        keyIdeaChapterContentHeadline = "Introduction";
    } else if (chapter_index <= chapterLength) {
        keyIdeaHeadline = "Key idea " + chapter_index;
        keyIdeaAudioHeadline = "Key idea " + chapter_index + " of " + chapterLength;
        keyIdeaChapterHeadline = chapter.action_title;
        keyIdeaIndex = chapter_index;
        keyIdeaChapterContentHeadline = keyIdeaHeadline;
    } else {
        keyIdeaHeadline = "Final summary";
        keyIdeaAudioHeadline = "Final summary";
        keyIdeaChapterHeadline = "Final summary";
        keyIdeaIndex = "";
        keyIdeaChapterContentHeadline = "";
    }
    chapterKeyIdeaHtml = '<div chapter-index="' + chapter_index + '" '
    chapterKeyIdeaHtml += 'class="flex pl-2 m:pl-0 py-4 w-full items-center text-midnight hover:text-blue hover:bg-white cursor-pointer text-blue bg-white"><div class="font-bold mx-6 w-4 flex-shrink-0"><div class="headline font-bold font-cera-pro text-h35 ">';
    chapterKeyIdeaHtml += keyIdeaIndex;
    chapterKeyIdeaHtml += '</div></div><div class="text-sm flex-grow mr-2">';
    chapterKeyIdeaHtml += keyIdeaChapterHeadline;
    chapterKeyIdeaHtml += '</div><div class="ml-5 m:mx-8"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6  ml-auto transform rotate-90"><path d="M12.4545 11.1124L17.1459 15.7437C17.4921 16.0854 18.0533 16.0854 18.3994 15.7437C18.7456 15.402 18.7456 14.848 18.3994 14.5063L13.0813 9.25628C12.7351 8.91457 12.1739 8.91457 11.8278 9.25628L6.50958 14.5063C6.16343 14.848 6.16343 15.402 6.50958 15.7437C6.85572 16.0854 7.41694 16.0854 7.76308 15.7437L12.4545 11.1124Z" fill="currentColor"></path></svg></div></div>';
    keyIdeaHtml += chapterKeyIdeaHtml;
    chapter["keyidea_headline"] = keyIdeaHeadline;
    chapter["keyidea_audio_headline"] = keyIdeaAudioHeadline;
    chapter["keyidea_index"] = keyIdeaIndex;
    chapter["keyidea_chapter_headline"] = keyIdeaChapterHeadline;
    chapter["keyidea_chapter_content_headline"] = keyIdeaChapterContentHeadline;
    chapter_data.push(chapter);
}

keyIdeaContentData = $("#key-idea-content-data");
keyIdeaContentData.html(keyIdeaHtml);

var readerChapterMobileTitle = $(".reader-chapter-mobile__title");
readerChapterMobileTitle.text(data.title)
var pictM = $("#pict-m");
var pictS = $("#pict-s");
var pictXS = $("#pict-xs");
var pictDefault = $("#pict-default");
pictM.attr("srcset", data.image.sources[2].srcset["2x"] + " 2x");
pictS.attr("srcset", data.image.sources[1].srcset["2x"] + " 2x");
pictXS.attr("srcset", data.image.sources[0].srcset["2x"] + " 2x");
pictDefault.attr("src", data.image.default.src)
pictDefault.attr("srcset", data.image.default.srcset["2x"] + " 2x");
pictDefault.attr("alt", data.title)

var menuButton = $(".mobile-menu-button");
var menuButtonImg = $(".mobile-menu-button img");
var menuContent = $("#menu-content");

function showMenuButton () {
    menuButton.attr("isopen", "1");
    menuButtonImg.attr("src","https://www.blinkist.com/packs/static/dark-reader/components/mobile-menu-bar/images/mobile-menu-close-icon-976c28e771611d875890.svg");
    menuContent.show();
}

function hideMenuButton () {
    menuButton.attr("isopen", "0");
    menuButtonImg.attr("src","https://www.blinkist.com/packs/static/dark-reader/components/mobile-menu-bar/images/mobile-menu-open-icon-54bb6c645fbf331e0098.svg");
    menuContent.hide();
}

menuButton.click(function () {
    var isopen = menuButton.attr("isopen");
    if(isopen === "0") {
        showMenuButton();
    } else if (isopen === "1") {
        hideMenuButton();
        hideKeyIdeaMenu();
        hideTextSize();
    }
});

var textSize = $("#text-size");
var textSizeToggleSvg = $("#text-size-toggle");
var textSizeContent = $("#text-size-content");
var textSizeContentMenu = $("#text-size-content-menu");

function showTextSize () {
    textSizeToggleSvg.removeClass("transform");
    textSizeToggleSvg.removeClass("rotate-180");
    textSizeContent.removeClass("opacity-0");
    textSizeContent.addClass("opacity-100");
    textSizeContentMenu.show();
}

function hideTextSize () {
    textSizeToggleSvg.addClass("transform");
    textSizeToggleSvg.addClass("rotate-180");
    textSizeContent.removeClass("opacity-100");
    textSizeContent.addClass("opacity-0");
    textSizeContentMenu.hide();
}

textSize.click(function () {
    var isclose = textSizeToggleSvg.hasClass("transform");
    if (isclose) {
        showTextSize();
    } else {
        hideTextSize();
    }
});

var keyIdea = $("#key-idea");
var keyIdeaToggleSvg = $("#key-idea-toggle");
var keyIdeaContent = $("#key-idea-content");
var keyIdeaContentMenu = $("#key-idea-content-menu");

function showKeyIdeaMenu () {
    keyIdeaToggleSvg.removeClass("transform");
    keyIdeaToggleSvg.removeClass("rotate-180");
    keyIdeaContent.removeClass("opacity-0");
    keyIdeaContent.addClass("opacity-100");
    keyIdeaContentMenu.show();
}

function hideKeyIdeaMenu () {
    keyIdeaToggleSvg.addClass("transform");
    keyIdeaToggleSvg.addClass("rotate-180");
    keyIdeaContent.removeClass("opacity-100");
    keyIdeaContent.addClass("opacity-0");
    keyIdeaContentMenu.hide();
}

keyIdea.click(function () {
    var isclose = keyIdeaToggleSvg.hasClass("transform");
    if (isclose) {
        showKeyIdeaMenu();
    } else {
        hideKeyIdeaMenu();
    }
});

var textSizeS = $("#text-size-s");
var textSizeM = $("#text-size-m");
var textSizeL = $("#text-size-l");
var readerContentText = $(".reader-content__text");

textSizeS.click(function () {
    textSizeS.removeClass("border-light-grey");
    textSizeS.addClass("border-green");
    textSizeM.addClass("border-light-grey");
    textSizeL.addClass("border-light-grey");
    readerContentText.addClass("text-r2");
    readerContentText.removeClass("text-r1");
    readerContentText.removeClass("text-r0");
    hideMenuButton();
    hideKeyIdeaMenu();
    hideTextSize();
});

textSizeM.click(function () {
    textSizeS.addClass("border-light-grey");
    textSizeM.removeClass("border-light-grey");
    textSizeM.addClass("border-green");
    textSizeL.addClass("border-light-grey");
    readerContentText.removeClass("text-r2");
    readerContentText.addClass("text-r1");
    readerContentText.removeClass("text-r0");
    hideMenuButton();
    hideKeyIdeaMenu();
    hideTextSize();
});

textSizeL.click(function () {
    textSizeS.addClass("border-light-grey");
    textSizeM.addClass("border-light-grey");
    textSizeL.removeClass("border-light-grey");
    textSizeL.addClass("border-green");
    readerContentText.removeClass("text-r2");
    readerContentText.removeClass("text-r1");
    readerContentText.addClass("text-r0");
    hideMenuButton();
    hideKeyIdeaMenu();
    hideTextSize();
});

var readerAudioPlayerMobile = $(".reader-chapter-mobile");
var readerAudioPlayerMobileArrow = $(".reader-audio-player-mobile__arrow");
var readerAudioPlayerMobileButton = $("#reader-audio-play-button");
var audioControlsPlayerButton = $("#audio-controls-play-button");
var readerAudioPlayerMobileAudio = $(".reader-audio-player-mobile__audio-wrapper");
var isAudioPlaying = (readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__pause") || audioControlsPlayerButton.hasClass("audio-controls__pause"));
var readerChapterMobileStatus = $(".reader-chapter-mobile__status");

console.log("isAudioPlaying", isAudioPlaying)

function hideAudioPlayerMobileAudio() {
    readerAudioPlayerMobileButton.removeClass("reader-audio-player-mobile__arrow");
    readerAudioPlayerMobileButton.addClass("reader-audio-player-mobile__play");
    readerAudioPlayerMobileAudio.hide();
};

function showAudioPlayerMobileAudio() {
    readerAudioPlayerMobileButton.removeClass("reader-audio-player-mobile__play");
    readerAudioPlayerMobileButton.removeClass("reader-audio-player-mobile__pause");
    readerAudioPlayerMobileButton.addClass("reader-audio-player-mobile__arrow");
    readerAudioPlayerMobileAudio.show();
};

readerAudioPlayerMobile.click(function () {
    if (readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__arrow")) {
        hideAudioPlayerMobileAudio();
        setAudioButton();
    } else {
        showAudioPlayerMobileAudio();
    }
});

function setAudioPlay() {
    if (! readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__arrow")) {
        readerAudioPlayerMobileButton.removeClass("reader-audio-player-mobile__play");
        readerAudioPlayerMobileButton.addClass("reader-audio-player-mobile__pause");
    }
    audioControlsPlayerButton.removeClass("audio-controls__play");
    audioControlsPlayerButton.addClass("audio-controls__pause");
    readerChapterMobileStatus.text("Now Playing");
    audio.play();
}

function setAudioPause() {
    if (! readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__arrow")) {
        readerAudioPlayerMobileButton.removeClass("reader-audio-player-mobile__pause");
        readerAudioPlayerMobileButton.addClass("reader-audio-player-mobile__play");
    }
    audioControlsPlayerButton.removeClass("audio-controls__pause");
    audioControlsPlayerButton.addClass("audio-controls__play");
    readerChapterMobileStatus.text("Continue listening");
    audio.pause();
}

function setAudioButton() {
    if (! isAudioPlaying) {
        setAudioPause();
    } else {
        setAudioPlay();
    }
}

function switchAudioButton() {
    if (readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__pause") || audioControlsPlayerButton.hasClass("audio-controls__pause")) {
        isAudioPlaying = false;
        setAudioButton();
    } else if (readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__play") || audioControlsPlayerButton.hasClass("audio-controls__play")) {
        isAudioPlaying = true;
        setAudioButton();
    }
};

readerAudioPlayerMobileButton.click(function () {
    if (readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__pause") || readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__play")) {
        switchAudioButton();
    } else if (readerAudioPlayerMobileButton.hasClass("reader-audio-player-mobile__arrow")) {
        hideAudioPlayerMobileAudio();
    }
});

audioControlsPlayerButton.click(function () {
    if (audioControlsPlayerButton.hasClass("audio-controls__pause") || audioControlsPlayerButton.hasClass("audio-controls__play")) {
        switchAudioButton();
    }
});

var readerChapterMobileChapter = $(".reader-chapter-mobile__chapter");
var readerContentSlug = $("#chapter-headline-slug");
var readerContentHeadline = $(".reader-content__headline");
var readerContentText = $(".reader-content__text");
var readerContentPrevious = $(".reader-content__previous");
var readerContentNext = $(".reader-content__next");
var audioControlsPrevious = $(".audio-controls__previous");
var audioControlsNext = $(".audio-controls__next");
var audioWrapper = $(".reader-audio-player-mobile__audio-wrapper");

readerContentPrevious.click(function () {
    setPreviousChapter();
});

readerContentNext.click(function () {
    setNextChapter();
});

audioControlsPrevious.click(function () {
    setPreviousChapter();
});

audioControlsNext.click(function () {
    setNextChapter();
});

function getChapterIndex(node) {
    if (node.getAttribute("chapter-index") != null) {
        return node.getAttribute("chapter-index");
    }
    parent = node.parentNode;
    return getChapterIndex(parent);
}

keyIdeaContentData.click(function (event) {
    chapterIndex = getChapterIndex(event.target);
    currentChapterOrd = parseInt(chapterIndex);
    setCurrentChapter();
    hideMenuButton();
    hideKeyIdeaMenu();
    hideTextSize();
});

function setNextChapter () {
    if (currentChapterOrd <= chapterLength) {
        currentChapterOrd += 1;
        setCurrentChapter();
    }
}

function setPreviousChapter () {
    if (currentChapterOrd > 0) {
        currentChapterOrd -= 1;
        setCurrentChapter();
    }
}

var audioProgressTotalTime = $(".audio-progress__total-time");
var audioProgressRemainingTime = $(".audio-progress__remaining-time");
var rangerTrail = $(".dark-ranger__trail");
var rangerThumb = $(".dark-ranger__thumb");
var rangerPath = $(".dark-ranger__path");
var audioControlsBack = $(".audio-controls__back");
var audioControlsForward = $(".audio-controls__forward");

function getTimeCodeFromNum(num) {
    var seconds = parseInt(num);
    var minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    var hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) {
        return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    }
    return `${String(hour).padStart(2, 0)}:${minutes}:${String(seconds % 60).padStart(2, 0)}}`;
}

function setCurrentAudio () {
    if (audio !== undefined ){
        audio.pause();
    }
    audio = new Audio(currentAudioUrl);
    audio.onloadeddata = function () {
        audioProgressTotalTime.text(getTimeCodeFromNum(audio.duration) + " ");
        audioProgressRemainingTime.text(getTimeCodeFromNum(audio.currentTime) + " ");
    };
    audio.oncanplay = function () {
        if (isAudioPlaying){
            setAudioPlay();
        }
    };
}

rangerPath.click(function (event) {
    var rangeWidth = rangerPath.width();
    var timeToSeek = event.offsetX / parseInt(rangeWidth) * audio.duration;
    audio.currentTime = timeToSeek;
});

audioControlsBack.click(function () {
    if (audio.currentTime - 15 > 0) {
        audio.currentTime = audio.currentTime - 15;
    } else {
        audio.currentTime = 0;
    }
});

audioControlsForward.click(function () {
    if (audio.currentTime + 15 < audio.duration) {
        audio.currentTime = audio.currentTime + 15;
    } else {
        audio.currentTime = audio.duration;
    }
});

setInterval(function () {
    audioProgressRemainingTime.text(getTimeCodeFromNum(audio.currentTime) + " ");
    var percent = audio.currentTime / audio.duration * 100;
    rangerTrail.css("width", percent + "%");
    rangerThumb.css("left", percent + "%");
    if (percent === 100 && currentChapterOrd <= chapterLength) {
        setAudioPause();
        currentChapterOrd += 1;
        setCurrentChapter();
    }
}, 500);

function setCurrentChapter () {
    console.log("setCurrentChapter", currentChapterOrd);
    if (currentChapterOrd === 0) {
        readerContentPrevious.hide();
        readerContentNext.show();
    } else if (currentChapterOrd === chapterLength + 1) {
        readerContentPrevious.show();
        readerContentNext.hide();
    } else {
        readerContentPrevious.show();
        readerContentNext.show();
    }
    var currentChapter = chapter_data[currentChapterOrd];
    readerChapterMobileChapter.text(currentChapter.keyidea_audio_headline + " ");
    readerContentSlug.text(currentChapter.keyidea_chapter_content_headline);
    readerContentHeadline.text(currentChapter.action_title);
    readerContentText.html(currentChapter.text);
    currentAudioUrl = currentChapter.audio_url;
    setCurrentAudio();
}

var currentChapterOrd;
var currentAudioUrl;
var audio;

function main () {
    currentChapterOrd = 0;
    setCurrentChapter();
}

main();

