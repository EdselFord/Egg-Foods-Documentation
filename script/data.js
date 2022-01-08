var changelog = [
    {
        header : 'Egg Foods - 3.0.0',
        thumb : 'img/foodlist.png',
        added : [
            'Egg Sandwich',
            'Steak and Egg',
            'Mutton and Egg',
            'Egg Tart',
            'Ingredient : Wheat Flour',
            'Slice of Toast texture remake'
        ],
        id : 'versionThree'
    },
    {
        header : 'Egg Foods - 2.0.0',
        thumb : 'img/thumb.png',
        added : [
            'Toast',
            'Slice of Toast',
            'Egg on Toast',
            'French Toast',
            'Tools : Kitchen Knife'
        ],
        id : 'versiontwo'
    },
    {
        header : 'Egg Foods - 1.0.0',
        thumb : 'img/cookingtable.png',
        added : [
            'Omelette Egg',
            'Shirred Egg',
            'Bacon and Egg',
            'Cooking Table',
            'Tools',
            'Ingredients'
        ],
        id : 'versionone'
    },
    {
        header : 'Fried Egg - 2.0.0',
        thumb : 'img/friedegg.jpg',
        added : [
            'Scrambled Egg',
            'Plate'
        ],
        id : 'oldtwo'
    },
    {
        header : 'Fried Egg - 1.0.0',
        thumb : 'img/friedeggthumb.png',
        added : [
            'Fried Egg'
        ],
        id : 'oldone'
    }
]

var cookingTables = {
    itemName : 'Cooking Table',
    keys : [
        ['4-0','4-0','4-0'],
        ['4-0','58-0','4-0'],
        ['4-0','4-0','4-0']
    ],
    result : 'cooking-table'
}


var toolsRecipe = [
    {
        itemName : 'Skillet',
        keys : [
            ['265-0','0-0','0-0'],
            ['280-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'skillet'
    },
    {
        itemName : 'Saucepan',
        keys : [
            ['0-0','280-0','0-0'],
            ['265-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'saucepan'
    },
    {
        itemName : 'Mixing Bowl',
        keys : [
            ['0-0','0-0','0-0'],
            ['265-0','280-0','265-0'],
            ['0-0','265-0','0-0']
        ],
        result : 'mixing-bowl'
    },
    {
        itemName : 'Plate',
        keys : [
            ['265-0','281-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'plate'
    },
    {
        itemName : 'Kitchen Knife',
        keys : [
            ['280-0','265-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'kitchen-knife'
    }
]
var spicesRecipe = [
    {
        itemName : 'Heavy Cream',
        keys : [
            ['8001-0','335-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'heavy-cream'
    },
    {
        itemName : 'Salt',
        keys : [
            ['8003-0','326-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'salt'
    },
    {
        itemName : 'Wheat Flour',
        keys : [
            ['8001-0','296-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'wheat-flour'
    },
    {
        itemName : 'Butter',
        keys : [
            ['8001-0','335-0','8007-0',],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'butter'
    }
]


var eggFoods = [
    {
        itemName : 'Fried Egg',
        keys : [
            ['8004-0','344-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'fried-egg'
    },
    {
        itemName : 'Scrambled Egg',
        keys : [
            ['8004-0','344-0','8007-0'],
            ['8002-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'scrabbled-egg'
    },
    {
        itemName : 'Omelette Egg',
        keys : [
            ['8004-0','344-0','8008-0'],
            ['8007-0','8002-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'omelette-egg'
    },
    {
        itemName : 'Bacon and Egg',
        keys : [
            ['8004-0','344-0','319-0'],
            ['8007-0','8002-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'bacon-and-egg'
    },
    {
        itemName : 'Shirred Egg',
        keys : [
            ['8003-0','344-0','8008-0'],
            ['8007-0','8009-0','281-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'shirred-egg'
    },
    {
        itemName : 'Toast',
        keys : '297-0',
        result : 'toast',
        type : 'furnace'
    },
    {
        itemName : 'Slice of Toast',
        keys : [
            ['8000-0','8011-0','0-0'],
            ['0-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'slice-of-toast'
    },
    {
        itemName : 'Egg on Toast',
        keys : [
            ['8013-0','0-0','0-0'],
            ['8012-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'egg-on-toast'
    },
    {
        itemName : 'Frech Toast',
        keys : [
            ['8004-0','344-0','8007-0'],
            ['335-0','8012-0','8002-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'french-toast'
    },
    {
        itemName : 'Egg Sandwich',
        keys : [
            ['8004-0','8012-0','344-0'],
            ['8012-0','0-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'egg-sandwich'
    },
    {
        itemName : 'Steak and Egg',
        keys : [
            ['8004-0','344-0','363-0'],
            ['8007-0','8002-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'steak-and-egg'
    },
    {
        itemName : 'Mutton and Egg',
        keys : [
            ['8004-0','344-0','423-0'],
            ['8007-0','8002-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'mutton-and-egg'
    },
    {
        itemName : 'Egg Tart',
        keys : [
            ['8004-0','8014-0','344-0'],
            ['353-0','335-0','0-0'],
            ['0-0','0-0','0-0']
        ],
        result : 'egg-tart'
    }
]