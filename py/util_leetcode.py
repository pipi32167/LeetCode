import time

timed = {}


def profiling(tag):
    timed[tag] = time.time()

def profiling_end(tag):
    if tag not in timed:
        print("not init tag[%s] yet" % (tag))
        return
    now = time.time()
    print("%s: %.3f" % (tag, now - timed[tag]))
    timed[tag] = now
