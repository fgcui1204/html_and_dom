function Answers(){
    var answers = [
        new Fill_blank('fill_1', '统一建模语言', 5),
        new Fill_blank('fill_2', '封装性继承性多态性', 5),

        new Check_choose('choose_1', 'B', 10),
        new Check_choose('choose_2', 'A', 10),

        new Check_chooses('chooses_1', 'ABD', 10),
        new Check_chooses('chooses_2', 'ABC', 10),

        new Gudge('gudge_1', 'N', 10),
        new Gudge('gudge_2', 'Y', 10),

        new Q_a('q_a', '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。', 20)
    ];
    return answers;
}