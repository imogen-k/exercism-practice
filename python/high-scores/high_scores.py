def latest(scores):
    return scores[-1]


def personal_best(scores):
    scores.sort(reverse=True)
    return scores[0]


def personal_top_three(scores):
    scores.sort(reverse=True)
    top_three = []
    if len(scores) >= 3:
        top_three.extend((scores[0], scores[1], scores[2]))
        return top_three
    elif len(scores) == 2:
        top_three.extend((scores[0], scores[1]))
        return top_three
    elif len(scores) == 1:
        top_three.append(scores[0])
        return top_three
    
