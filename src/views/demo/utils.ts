import { INode, IEdge } from './index';

// 深度优先搜索找环
export function findDAG(nodes: INode[], edges: IEdge[]) {
  console.log('nodes Edges', nodes, edges);
  const n = nodes.length;
  const nodeIds = nodes.map((item: any) => {
    return item.id;
  });
  const pre = Array(n+1).fill(-1);

  // 用来标记节点访问状态 0 未访问 1访问中 2访问完毕
  const color = Array(n+1).fill(0);

  const edgePoints : any[] =  edges.map(item => {
    return [item.source, item.target];
  });
  


  console.log('领接表---->', edgePoints);
  const adj : any = [[], [], [], [], [], [], [], [], []]; 
  edgePoints.forEach(edge => {
    const [source, target] = edge;
    adj[source].push(target);
  });

  const cycles : any[] = [];

  // 记录起来 在访问情况为1的时候直接判断有环存起来，因为1是在找查找的链条上
  // 如果有是1证明跑回来了
  const buildCycle = (start: any, end: any) => {
      const cycle : any[] = [start];
      for(let cur = end; cur !== start; cur = pre[cur]) {
        cycle.push(cur);
      }
      cycle.push(start);
      cycles.push(cycle.reverse());
  };

  const dfs = (source: any) => {
    // 首先将节点的访问情况设置为1
    color[source] = 1;
    // 遍历节点的字节点
    adj[source].forEach((target: any) => {
      // 如果节点的访问情况为0，记录该节点的父节点，并且递归访问
      // 如果节点的访问情况为1，有环记录起来
      // 节访问情况为2，则是完全访问过
      if (color[target] === 0) {
        pre[target] = source;
        dfs(target);
      } else if (color[target] === 1) {
        buildCycle(target, source);
      }
    });
    color[source] = 2;
  }
  
  // 根据顶点访问情况(color)使用DFS遍历
  for (let v = 1; v <= n; v++) {
    if (color[v] === 0) {
      dfs(v);
    }
  }
  const cycleEdges : any[] = [];
  cycles.forEach(item => {
    for(let i = 0; i< item.length - 1; i++) {
      cycleEdges.push(`e${nodeIds[item[i]- 1]}-${nodeIds[item[i+1] - 1]}`);
    }
  });
  console.log(cycleEdges);

  return edges.map(edge => {
    const isDash = cycleEdges.includes(edge.id);
    return {
      ...edge,
      stroke: isDash ? '#E33E38' : edge.stroke,
      dash: isDash ? [3 , 10] : [],
    }
  });
}
