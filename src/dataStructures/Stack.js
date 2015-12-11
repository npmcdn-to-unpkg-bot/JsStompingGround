// strictly academic

export default function() {
    var top = null;
    var count = 0;

    this.getCount = function() {
        return count;
    }

    this.push = function(item) {
        var node = {
            data: item,
            next: null,
        };

        node.next = top;
        top = node;
        count++;
    }

    this.peek = function() {
        if(top === null) {
            return null;
        } else {
            return top.data;
        }
    }

    this.pop = function() {
        if(top === null) {
            return null;
        } else {
            var node = top;
            top = top.next;
            if(count > 0) {
                count--;
            }
            return node.data;
        }
    }

    this.toArray = function() {
        var nodeArray = [];
        if(top !== null) {
            var node = top,
                i = count;
            while(i) {
                nodeArray[--i] = node.data;
                node = node.next;
            }
        }
        return nodeArray;
    }

}
